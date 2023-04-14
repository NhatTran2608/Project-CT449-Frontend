<template >
    <div class="container">
        <div class="row">
            <div class="col-lg-8-4">
                <iframe width="700px" height="400px" :src="`https:/www.youtube.com/embed/${courses.videoID}?&autoplay=1`"
                    frameborder="0"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen style="border-radius: 8px;">
                </iframe>
                <h3>{{ courses.name }}</h3>
            </div>
            <div class="col-sm-4">
                <h3 class="title-lyrics">Lời nhạc</h3>
                <p id="lyrics"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                
            </div>
            <div class="col-sm">

            </div>
            <div class="col-sm">

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            courses: [],
        }
    },
    computed: {
        slug() {
            return this.$route.params.slug;
        }
    },
    created() {
        console.log(this.$route.params.slug);
        axios
            .get('http://localhost:3000/music/' + this.slug)
            .then(res => {
                this.courses = res.data.courses;
            },)
            .catch(err => {
                console.log(err)
            })
    },
    updated() {
        let p = document.getElementById('lyrics')
        p.innerHTML = this.courses.description.replace(/(\r\n|\r|\n)/g, '<br />')
    },
}
</script>

<style  scoped>
#lyrics {
    width: 400px;
    height: 400px;
    overflow: scroll;
}

h3 {
    text-align: center;
    margin: auto;
}

.title-lyrics {
    width: 400px;
    background-color: #ccc;
    margin-bottom: 5px;
}
</style>
