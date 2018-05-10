<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="username" type="text" placeholder="Snoopy"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login: function () {
                const { username, password } = this
                this.$store.dispatch('AUTH_REQUEST', { username, password }).then(() => {
                    this.$router.push('/')
                })
            },
            logout: function () {
                this.$store.dispatch('AUTH_LOGOUT')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>

<style scoped>

</style>