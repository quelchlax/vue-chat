<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter username</label>
          <input type="text" name="name" v-model="name">
          <!-- simple warning message -->
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn cyan">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data(){
    return{
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      // this basically says if name isn't null because null is false (I think?)
      if(this.name){
        this.$router.push({ name: 'Chat', params: {name: this.name} }) // params will pass the props that we're expecting
      } else {
        this.feedback = 'You must enter a username to join!'
      }
    }
  }
}
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 3.5em;
}

.welcome button {
  margin: 30px auto; /* 30px top/bottom and auto right/left */
}
</style>
