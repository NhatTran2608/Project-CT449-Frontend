
<template>
    <div>
        <form method="POST" @submit.prevent="AddSong" id="form-id">
            <div class="form-group">
                <label for="namesong">Tên bài hát</label>
                <input name="namesong" type="text" class="form-control" id="namesong" placeholder="Nhập tên bài hát"
                    v-model="courses.name">
            </div>
            <div class="form-group">
                <label for="authorsong">Nhạc sĩ (Ca sĩ)</label>
                <input name="authorsong" type="text" class="form-control" id="authorsong" placeholder="Nhập tên ca sĩ"
                    v-model="courses.author">
            </div>
            <div class="row">
                <div class="col">
                    <label for="linkimage">Link ảnh</label>
                    <input name="linkimage" type="text" class="form-control" id="linkimage" placeholder="Link ảnh"
                        v-model="courses.image">
                </div>
                <div class="col">
                    <label for="idvideo">ID Video</label>
                    <input name="idvideo" type="text" class="form-control" id="idvideo" placeholder="VideoID"
                        v-model="courses.videoID">
                </div>
            </div>
            <div class="form-group">
                <label for="describe">Lời bài hát</label>
                <textarea type="text" class="form-control" id="describe" placeholder="Nhập lời bài hát" cols="10" rows="8"
                    v-model="courses.description">
                    </textarea>
            </div>
            <div class="buttom-form">
                <button type="submit" class="btn btn-primary text-uppercase">Đăng bài hát</button>
                <button type="reset" class="btn btn-primary text-uppercase">Hủy</button>
            </div>

        </form>

    </div>
</template>


<script>



import axios from 'axios';
export default {
    data() {
        return {
            courses: {
                name: null,
                author: null,
                image: null,
                videoID: null,
                description: null,
                describe: null
            },

        }
    },
    methods: {
        AddSong() {

            console.log(this.courses)

            axios.post('http://localhost:3000/me/music/store', this.courses)
                .then(() => {
                    this.courses.name = '',
                    this.courses.author = '',
                    this.courses.image = '',
                    this.courses.videoID = '',
                    this.courses.description = '',
                    this.courses.describe = ''
                })
                .catch(err => console.log(err));
                window.location.reload(true)
                alert('Thêm bài hát thành công!!!')
        },
        
    },
    
}
</script>
<style>
.buttom-form {
    text-align: center;
    margin: auto;
}

.btn-primary {
    margin-right: 10px;
}
</style>


