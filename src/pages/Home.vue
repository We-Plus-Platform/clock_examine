<template>
  <div id="home">
    <div class="title"><img src="../assets/img/person_title.png" /></div>
    <div class="yulan">
      <div class="picture">
        <img :src="imgLists" />
      </div>
      <div class="btns">
        <button @click="yes">通过√</button>
        <button @click="no">不通过×</button>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      imgLists: "",
      personList: [],
    };
  },
  methods: {
    yes() {
      console.log(this.personList);
      axios({
        url: "/admin/changeLastPoint",
        method: "post",
        params: {
          userId: this.personList[0].userId,
        },
      }).then((res) => {
        this.$toast.success({
          message: "审核通过",
          position: "bottom",
        });
        console.log(res);
        // 展示上传用户的信息
        axios({
          url: "/admin/showAllUser",
          methods: "get",
        }).then((res) => {
          console.log("用户信息返回值");
          this.personList = res.data;
          console.log(this.personList);
          if (this.personList.length !== 0) {
            // 获取图片的预览
            axios({
              url: "/record/previewCheck",
              responseType: "blob",
              methods: "get",
              params: {
                userId: this.personList[0].userId,
              },
              responseType: "arraybuffer",
            }).then((response) => {
              console.log(response);
              this.imgLists =
                "data:image/png;base64," +
                Buffer.from(response.data).toString("base64");
            });
          } else {
            alert("审核完了");
          }
        });
      });
    },
    no() {
      axios({
        url: "/admin/unQualified",
        method: "post",
        params: {
          userId: this.personList[0].userId,
        },
      }).then((res) => {
        this.$toast.fail({
          message: "审核不通过",
          position: "bottom",
        });
        console.log(res);
        axios({
          url: "/admin/showAllUser",
          methods: "get",
        }).then((res) => {
          console.log("用户信息返回值");
          this.personList = res.data;
          console.log(this.personList);
          if (this.personList.length !== 0) {
            // 获取图片的预览
            axios({
              url: "/record/previewCheck",
              responseType: "blob",
              methods: "get",
              params: {
                userId: this.personList[0].userId,
              },
              responseType: "arraybuffer",
            }).then((response) => {
              console.log(response);
              this.imgLists =
                "data:image/png;base64," +
                Buffer.from(response.data).toString("base64");
            });
          } else {
            alert("审核完了");
          }
        });
      });
    },
  },
  mounted() {
    // 展示上传用户的信息
    axios({
      url: "/admin/showAllUser",
      methods: "get",
    })
      .then((res) => {
        console.log("用户信息返回值");
        this.personList = res.data;
        console.log(this.personList);
        if (this.personList.length !== 0) {
          // 获取图片的预览
          axios({
            url: "/record/previewCheck",
            responseType: "blob",
            methods: "get",
            params: {
              userId: this.personList[0].userId,
            },
            responseType: "arraybuffer",
          })
            .then((response) => {
              console.log(response);
              this.imgLists =
                "data:image/png;base64," +
                Buffer.from(response.data).toString("base64");
            })
            .catch(function (error) {
              alert(error);
            });
        } else {
          alert("审核完毕");
        }
      })
      .catch(function (error) {
        alert(error);
      });
  },
};
</script>

<style scoped>
#home {
  height: 100%;
  background-color: #f6f6f6;
}
/* 顶部图片 */
.title {
  height: 30%;
}
.title img {
  width: 100%;
  height: 100%;
}
/* 图片预览 */
.yulan {
  height: 60%;
}
.yulan .picture {
  height: 80%;
}
.yulan .picture img {
  margin-top: 15%;
  margin-left: 15%;
  width: 70%;
  height: 70%;
}
.yulan .btns {
  display: flex;
  justify-content: space-around;
}
.yulan .btns button {
  font-weight: 400;
  text-align: center;
  color: #666666;
  letter-spacing: -1px;
  width: 405px;
  height: 110px;
  border-radius: 45px;
  background-color: #efcbaf;
  border: none;
}
/* 底部 */
footer {
  height: 10%;
  background-color: #f4e2cd;
}
</style>
