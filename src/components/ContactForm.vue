<script setup>
import { ref, reactive } from 'vue';


const AfficheMessageSucces = ref(false);
const AfficheMessageErreur = ref(false);

const message = ref({
        name: '',
        mail: '',
        tel: '',
        object: '',
        msg: '',
    })

    function sendMail(message) {
        if (message.name.length < 1 
        || message.mail.length < 1
        || message.object.length < 1 
        || message.msg.length < 1 ){
            AfficheMessageErreur.value = true
        }else {
            AfficheMessageErreur.value = false
            let mailto
            if(message.tel) {
                mailto = `mailto:contact.anohkolia@gmail.com?subject=${message.object}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0AVoici%20mon%20téléphone%20%3A%20${message.tel}%0A%0A${message.msg}`
            }else {
                mailto = `mailto:contact.anohkolia@gmail.com?subject=${message.object}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0A%0A${message.msg}`
            }
            location.href = mailto
        }
    }

</script>

<template>
    <!--Formulaire de contact-->
    <section class="resume-section pt-5">
        <div class="resume-section-content box" id="contact">
            <h2 class="fw-bold text-uppercase text-success mb-4"><i class="bi bi-envelope-at me-2"></i> Contact</h2>
            <form>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <input v-model="name" type="text" class="form-control" id="name" placeholder="Votre nom..." required>
                        </div>
                        <div class="mb-3">
                            <input v-model="tel" type="text" class="form-control" id="tel" placeholder="Téléphone">
                        </div>
                        <div class="mb-3">
                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Votre email" required>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <input v-model="object" type="text" class="form-control" id="subject" placeholder="Objet" required>
                        </div>
                        <div class="mb-3">
                            <textarea v-model="message" class="form-control" id="message" rows="3" placeholder="Votre message" required></textarea>
                        </div>
                    </div>
                </div>
                <input @click="sendMail(message)" type="submit" value="Envoyer" class="btn btn-success">
                <span v-if="AfficheMessageSucces" class="text-succes">Message envoyé avec succès</span>
            </form>
        </div>
    </section>
</template>

<style>
    
</style>