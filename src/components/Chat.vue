<template>
  <div class="chat container">
      <div class="center orange-text">Chat Box</div>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll>
                  <!-- quick markup for now -->
                  <li v-for="message in messages" :key="message.id">
                    <span class="green-text darken-2">{{message.name}}</span>
                    <span class="grey-text darken-3">{{message.content}}</span>
                    <span class="grey-text time">{{message.timestamp}}</span>
                  </li>

              </ul>
          </div>
          <div class="card-action">
              <NewMessage :name='name' />
          </div>
      </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment';
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return{ messages: [] }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
            if(change.type == 'added'){
                let doc = change.doc
                this.messages.push({
                    id: doc.id,
                    name: doc.data().name,
                    content: doc.data().content,
                    timestamp: moment(doc.data().timestamp).format('lll')
                })
              }
            })
          })
        }
    }
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}

.messages {
    max-height: 320px;
    overflow: auto;
}

.messages::-webkit-scrollbar {
    width: 6px;
}

.messages::-webkit-scrollbar-track {
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
    background: rgb(87, 2, 81);
}

.chat span {
    font-size: 1.4em;
    padding:0px 6px;
}

.chat .time {
    display: block;
    font-size: 1.6em;
}
</style>