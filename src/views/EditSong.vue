
<template>
    <div>

        <form id="form-id" @submit.prevent="UpdateSong">
            <div class="form-group">
                <label for="namesong">Tên bài hát</label>
                <input name="namesong" type="text" class="form-control" id="namesong" placeholder="Nhập tên bài hát"
                    v-model="this.singe.name">
            </div>
            <div class="form-group">
                <label for="authorsong">Nhạc sĩ (Ca sĩ)</label>
                <input name="authorsong" type="text" class="form-control" id="authorsong" placeholder="Nhập tên ca sĩ"
                    v-model="this.singe.author">
            </div>
            <div class="row">
                <div class="col">
                    <input name="linkimage" type="text" class="form-control" id="linkimage" placeholder="Link ảnh"
                        v-model="this.singe.image">
                </div>
                <div class="col">
                    <input name="idvideo" type="text" class="form-control" id="idvideo" placeholder="VideoID"
                        v-model="this.singe.videoID">
                </div>
            </div>
            <div class="form-group">
                <label for="describe">Lời bài hát</label>
                <textarea type="text" class="form-control" id="describe" placeholder="Nhập lời bài hát" cols="10" rows="8"
                    v-model="this.singe.description">
                        </textarea>
            </div>
            <div class="buttom-form">
                <button type="submit" class="btn btn-primary text-uppercase">Lưu</button>
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
            singe: {},
        }
    },
    created() {
        let ab = window.location.search
        let obj = new URLSearchParams(ab)
        let id = obj.get('id')
        axios
            .get(`http://localhost:3000/music/${id}/edit`)
            .then(res => {
                let data = res.data.courses
                this.singe = data;
            },)
            .catch(err => {
                console.log(err)
            },)
    },
    methods: {
        UpdateSong() {
            // console.log(this.singe)
            axios
                .put(`http://localhost:3000/music/${this.singe._id}/edit`, this.singe)
                .then(() => {

                })
                .catch(err => {
                    console.log(err)
                })
            window.location.reload(true)
            alert('Cập nhật thành công')
        }
    },

}
</script>


<style scoped>
.fa-square-plus {
    color: blue;

}

.fa-trash {
    color: red;

}

.buttom-icon {
    text-align: center;
    margin: auto;
}

button {
    border: none;
}
</style>



