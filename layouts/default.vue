<template>
  <div>
    <nuxt/>
    <script src="/jquery-3.2.1.min.js"></script>
    <script src="/bootstrap.min.js"></script>
    <script src="/owl.carousel.min.js"></script>
    <script src="/mixitup.min.js"></script>
    <script src="/circle-progress.min.js"></script>
    <script src="/main.js"></script>
  </div>
</template>

<style>
.linkk {
    position: fixed;
    right: 140px;
    bottom: 40px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    transition: 0.5s;
    z-index: 10000;
}
 html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


    .post-form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 20px;
        width: 400px;
    }
    label {
        display: block;
        width: 200px;
        padding: 10px;
        margin: 0;
        margin-top: 5px;
    }

    input {
        width: 400px;
        padding: 10px;
        margin: 0;
    }

    .button-wrp {
        text-align: center;
    }

    button[type='submit'] {
        margin-top: 20px;
        padding: 10px 30px;
        background-color: #478f2fc9;
        border: none;
        color: white;
        font-weight: bolder;
        transition: 0.5s;
        outline: none;
    }

    button[type='submit']:hover {
        border: none;
        cursor: pointer;
        background-color: green;
    }

</style>
