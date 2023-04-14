<template>
    <div class="home-view container">
        <div class="row mt-1 mb-4">
            <div class="col">
                <input type="search" style="width: 500px; margin: auto; border-radius: 40px 40px 40px 40px;"
                    id="searchAvenger" class="form-control" v-model="search" placeholder="Search..." />
            </div>
        </div>
        <div class="sections row">
            <!-- <div class="row mt-2" v-for="courses in SearchSong">  -->
            <template v-for="(singe, index) in SearchSong" :key="index">

                <div v-if="index < 15" class="card" style="width: 20rem;">

                    <router-link :to="'/music/' + singe.slug" style="text-decoration: none; color: black; ">
                        <img class="card-img-top" :src="singe.image" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{ singe.name }}</h5>
                            <p class="card-text"><i> Singer: {{ singe.author }}</i></p>
                        </div>

                    </router-link>
                    <!-- <div>
                        <h3> Không có bài hát nào!!! </h3>
                    </div> -->

                </div>


            </template>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            search: '',
            courses: []
        }
    },
    created() {
        axios
            .get('http://localhost:3000/')
            .then(res => {

                this.courses = res.data.courses;
            },)
            .catch(err => {
                console.log(err)
            },)
    },
    computed: {
        SearchSong() {
            return this.courses.filter(singe => {
                return (
                    singe.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    singe.author.toLowerCase().includes(this.search.toLowerCase())
                );
            });
        }
    }
}
</script>

<style scoped>
.home-view {
    margin-top: 20px;
}

.card {
    display: inline-block;
    margin: 0 12px 8px;
}

.row {
    margin: auto;
}

.card .card-body .card-title {
    min-height: 3rem;
    color: rgb(4, 4, 4);
}

.card-img-top {
    height: 200px;
}
</style>
