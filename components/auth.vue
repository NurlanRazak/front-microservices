<template>
    <div>
        <div :class="['auth-modal', {'closed': closed, 'closing': closing}]">
            <form @submit.prevent="sendAuth">
                <div>
                    <label for="username">Login: </label>
                    <input type="text" id="username" v-model="username" name="username" required/>
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input type="password" id="password" v-model="password" name="password" required/>
                </div>
                <div class="btn-wrp">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        <div :class="['overlay', {'closed': closed, 'closing': closing}]"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            closing: false,
            closed: false,
            username: null,
            password: null,
        }
    },
    mounted() {


        if (process.client) {
            document.body.classList.add('modal-hidden')
        }
    },
    methods: {
        ...mapActions({
            signin: 'auth/signin',
        }),
        async sendAuth() {
            await this.signin({username: this.username, password: this.password})
            this.closeModal()
        },
        closeModal() {
            this.closing = true
            window.setTimeout(() => {
                document.body.classList.remove('modal-hidden')
                this.closed = true
            }, 2000)
        }
    }
}
</script>

<style>
    .modal-hidden {
        overflow-y: hidden;
    }

    .closed {
        display: none;
    }

    .closing {
        transition: 1s ease-in-out;
        transform: scale(2);
        opacity: 0;
    }

    .overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 10;
    }

    .auth-modal {
        padding: 20px;
        border-radius: 10px;
        background-color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 13;
    }

    .auth-modal form {
        min-width: 200px;
        min-height: 200px;
    }
</style>
