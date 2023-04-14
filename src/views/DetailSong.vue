
<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">TT</th>
                    <th scope="col">Tên bài hát</th>
                    <th scope="col">Tác giả</th>
                    <th scope="col">Thời gian tải lên</th>
                    <th class="buttom-icon" scope="col">Chỉnh sửa</th>
                    <th class="buttom-icon" scope="col">Xóa</th>
                </tr>
            </thead>
            <tbody v-for="(singe, index) in courses" :key="index">
                
                <tr>
                    
                    <th scope="row">{{ index + 1 }}</th>
                    <router-link style="text-decoration: none;" :to="`/music/${singe.slug}`" >
                    <td>{{ singe.name }}</td>
                    </router-link>
                    <td>{{ singe.author }}</td>
                    <td>{{ singe.createdAt }}</td>
                    <!-- Update -->
                    <td class="buttom-icon"><router-link :to="`/music/?id=${singe._id}`" type="buttom" > 
                        <i class="fa-solid fa-pen-to-square"></i></router-link></td>
                    <!-- Delete -->
                    <td class="buttom-icon"><button data-toggle="modal" @click="e => {copyId(singe)}"
                        data-target="#exampleModal"><i class="fa-solid fa-trash"></i> </button></td>



                        
                </tr>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Xóa bài hát</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Bạn chắc chắn xóa bài hát này?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" @click="dlt()" >Xóa</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div v-if="index=0">
                    <h3>
                        Danh sách nhạc trống
                    </h3>
                </div> -->
            </tbody>
        </table>
    </div>
</template>



<script>
// import Edit from '@/components/EditSong.vue'
import axios from 'axios';
export default {
    data() {
        return {
            courses: [],
            id: ''
       
        }
    },
    created() {
        axios
            .get('http://localhost:3000/me/stored/music')
            .then(res => {
                this.courses = res.data.courses;
            },)
            .catch(err => {
                console.log(err)
            },)
    },
    methods: {
        copyId(singe){
            this.id = singe._id
        },
        dlt(){
        axios
            .delete(`http://localhost:3000/music/${this.id}`)
            .then(res => {
                this.courses = res.data.courses;
            },)
            .catch(err => {
                console.log(err)
            },)
        window.location.reload(true)
        }
    },
    
}
</script>


<style scoped>
.fa-pen-to-square {
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



