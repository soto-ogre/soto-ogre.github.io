
var nav = {
  data: function () {
    return {
      siteTitle: "BEE HOTEL",
      lists: [
        "Home",
        "Rooms",
        "Services",
        "About Us",
        "Blog",
        "Contact",
      ],
      scrollY: 0,
      show: true,
      beeIcon : `
<g>
	<path class="st0" d="M197.433,150.171c-0.004,14.99,5.655,28.699,14.922,39.047l1.692,1.892h83.901l1.691-1.892
		c9.268-10.348,14.927-24.057,14.923-39.047c0.004-16.151-6.563-30.831-17.15-41.418c-4.948-4.946-10.798-9.004-17.269-11.938
		l13.34-27.271c2.751-0.43,5.258-2.139,6.574-4.833c2.139-4.375,0.331-9.658-4.044-11.789c-4.372-2.146-9.658-0.33-11.793,4.038
		c-1.544,3.158-1.024,6.788,1.027,9.362l-13.436,27.462c-5.036-1.414-10.333-2.18-15.813-2.18c-5.479,0-10.78,0.766-15.816,2.18
		L226.752,66.33c2.05-2.582,2.571-6.211,1.027-9.37c-2.138-4.368-7.421-6.183-11.796-4.038c-4.372,2.132-6.183,7.414-4.045,11.789
		c1.319,2.694,3.823,4.403,6.574,4.833l13.344,27.271c-6.472,2.934-12.324,6.992-17.27,11.938
		C203.996,119.34,197.43,134.02,197.433,150.171z M256,102.943c13.063,0,24.831,5.275,33.396,13.829
		c8.556,8.568,13.836,20.336,13.836,33.399c0,11.227-3.912,21.49-10.443,29.6h-73.578c-6.531-8.11-10.438-18.373-10.442-29.6
		c0.004-13.063,5.279-24.831,13.832-33.399C231.166,108.218,242.937,102.943,256,102.943z"></path>
	<path class="st0" d="M104.328,249.564c17.448-0.007,34.781-3.869,49.402-8.469c14.617-4.622,26.498-10.003,32.955-13.224
		c5.564-2.786,9.742-6.05,12.587-9.89c1.418-1.913,2.484-3.953,3.173-6.064c0.696-2.103,1.009-4.256,1.009-6.344
		c-0.007-4.27-1.266-8.23-3.074-11.789c-1.818-3.56-4.213-6.768-6.795-9.631c-3.254-3.594-7.347-7.379-12.141-11.367
		c-8.384-6.95-18.922-14.455-30.655-21.961c-17.596-11.262-37.862-22.496-57.431-31.598c-9.781-4.552-19.39-8.568-28.426-11.783
		c-9.038-3.207-17.498-5.62-25.076-6.942h0.004c-2.41-0.416-5.244-0.718-8.329-0.718c-3.221,0-6.717,0.324-10.259,1.246
		c-2.651,0.696-5.332,1.73-7.874,3.25c-3.816,2.257-7.316,5.683-9.704,10.284C1.291,119.172-0.004,124.841,0,131.587
		c0,4.031,0.454,8.469,1.414,13.372c0.37,1.892,0.978,4.382,1.84,7.428c3.028,10.629,9.221,27.926,19.308,45.089
		c5.044,8.575,11.068,17.114,18.209,24.732c7.143,7.619,15.419,14.322,24.968,19.098C77.812,247.342,91.135,249.564,104.328,249.564
		z M46.342,211.46c-10.608-12.205-18.672-27.068-24.243-40.06c-2.789-6.499-4.963-12.528-6.549-17.501
		c-1.586-4.966-2.585-8.94-3.011-11.114c-0.844-4.305-1.203-8.019-1.203-11.198c0-4.741,0.799-8.23,1.956-10.833
		c0.876-1.963,1.948-3.44,3.19-4.657c1.854-1.808,4.15-3.039,6.774-3.841c2.613-0.809,5.522-1.139,8.275-1.132
		c2.343-0.007,4.573,0.232,6.381,0.548l0.017,0.007c10.178,1.759,23.23,6.036,37.25,11.902
		c21.054,8.786,44.372,21.116,64.532,33.651c10.076,6.267,19.376,12.584,27.194,18.514c7.822,5.916,14.177,11.473,18.275,16.01
		c2.072,2.286,3.883,4.769,5.1,7.175c1.231,2.406,1.846,4.678,1.84,6.641c0,0.97-0.141,1.878-0.44,2.799
		c-0.457,1.379-1.284,2.814-2.852,4.41c-1.565,1.584-3.893,3.293-7.213,4.952c-5.99,2.997-17.417,8.167-31.299,12.542
		c-13.875,4.389-30.226,7.962-45.986,7.955c-11.934,0-23.47-2.033-33.518-7.062C61.57,226.549,53.404,219.613,46.342,211.46z"></path>
	<path class="st0" d="M195.622,254.636c1.801-5.719,3.049-10.474,3.738-13.935l-11.114-2.216c-0.377,1.892-1.02,4.523-1.914,7.668
		c-3.122,11.022-9.295,28.249-17.997,44.625c-4.35,8.195-9.327,16.179-14.817,23.086c-5.49,6.915-11.484,12.718-17.74,16.664
		c-8.845,5.592-19.112,8.23-28.911,8.23c-7.586,0-14.86-1.59-20.881-4.453c-3.011-1.428-5.712-3.172-8.008-5.177
		c-2.297-1.998-4.196-4.255-5.649-6.746c-2.979-5.107-4.491-11.269-4.494-18.106c-0.004-7.4,1.793-15.553,5.311-23.628
		c3.514-8.082,8.74-16.087,15.468-23.22l-8.251-7.78c-7.614,8.09-13.551,17.142-17.61,26.47c-4.055,9.334-6.246,18.943-6.254,28.158
		c0,8.497,1.892,16.706,6.039,23.818c2.121,3.644,4.847,6.851,7.994,9.58c4.734,4.122,10.404,7.21,16.587,9.278
		c6.183,2.075,12.887,3.144,19.748,3.144c11.807-0.007,24.127-3.151,34.964-9.988c8.807-5.571,16.432-13.526,23.107-22.51
		c9.999-13.485,17.874-29.346,23.649-43.513C191.475,267.01,193.821,260.355,195.622,254.636z"></path>
	<path class="st0" d="M509.063,116.14c-1.435-3.222-3.376-5.966-5.627-8.153c-3.39-3.312-7.407-5.367-11.382-6.577
		c-3.988-1.217-7.963-1.625-11.589-1.625c-3.084,0-5.92,0.303-8.325,0.718c-11.536,2.018-25.162,6.555-39.687,12.612
		c-21.771,9.102-45.49,21.652-66.146,34.496c-10.33,6.415-19.889,12.901-28.06,19.098c-8.181,6.197-14.958,12.064-19.833,17.444
		c-2.585,2.863-4.977,6.071-6.799,9.631c-1.804,3.559-3.067,7.519-3.073,11.789c0,2.089,0.316,4.241,1.012,6.344
		c1.034,3.166,2.916,6.176,5.554,8.835c2.645,2.673,6.028,5.029,10.207,7.119c6.458,3.221,18.338,8.602,32.955,13.224
		c14.617,4.6,31.953,8.462,49.398,8.469c13.192,0,26.515-2.223,38.593-8.258c10.913-5.459,20.16-13.435,27.961-22.418
		c11.691-13.485,20.188-29.284,26.094-43.014c2.95-6.873,5.244-13.232,6.936-18.535c1.692-5.325,2.775-9.56,3.331-12.38
		c0.96-4.902,1.418-9.341,1.418-13.372C512,125.586,510.979,120.444,509.063,116.14z M499.457,142.785
		c-0.281,1.442-0.819,3.707-1.618,6.506c-2.789,9.834-8.743,26.421-18.173,42.438c-4.709,8.012-10.284,15.883-16.71,22.728
		c-6.426,6.851-13.685,12.669-21.768,16.713c-10.048,5.029-21.584,7.062-33.521,7.062c-15.76,0.007-32.108-3.566-45.986-7.955
		c-13.879-4.376-25.306-9.545-31.295-12.542c-4.436-2.216-7.077-4.502-8.55-6.492c-0.742-1.012-1.214-1.948-1.52-2.87
		c-0.296-0.921-0.436-1.829-0.44-2.799c-0.004-1.963,0.609-4.235,1.842-6.641c1.218-2.406,3.029-4.888,5.097-7.175
		c2.733-3.017,6.471-6.506,10.973-10.242c7.882-6.534,18.096-13.829,29.526-21.144c17.15-10.974,37.053-22.018,56.102-30.866
		c9.521-4.432,18.828-8.315,27.444-11.374c8.614-3.06,16.548-5.296,23.223-6.458c1.811-0.316,4.038-0.555,6.38-0.548
		c2.448-0.007,5.019,0.253,7.393,0.879c1.786,0.464,3.454,1.126,4.938,2.012c2.219,1.337,4.038,3.102,5.458,5.796
		c1.404,2.694,2.406,6.444,2.406,11.776C500.664,134.766,500.302,138.48,499.457,142.785z"></path>
	<path class="st0" d="M429.115,249.649l-8.251,7.78c6.732,7.132,11.951,15.138,15.468,23.22c3.52,8.083,5.314,16.228,5.314,23.628
		c-0.004,6.844-1.52,12.999-4.499,18.106c-1.452,2.49-3.348,4.748-5.648,6.746c-3.44,3.004-7.801,5.423-12.743,7.084
		c-4.941,1.653-10.456,2.546-16.147,2.546c-9.798,0-20.061-2.638-28.914-8.23c-7.147-4.502-13.952-11.451-20.051-19.682
		c-9.17-12.338-16.745-27.49-22.257-41.038c-2.757-6.774-5.012-13.147-6.721-18.57c-1.706-5.416-2.866-9.911-3.439-12.753
		l-11.111,2.216c0.461,2.307,1.168,5.184,2.124,8.554c3.342,11.748,9.697,29.516,18.891,46.848
		c4.597,8.652,9.904,17.198,15.957,24.816c6.056,7.612,12.852,14.322,20.558,19.19c10.836,6.837,23.161,9.981,34.964,9.988
		c9.151-0.007,18.018-1.885,25.745-5.557c3.862-1.829,7.439-4.121,10.59-6.865c3.151-2.729,5.874-5.936,7.994-9.58
		c4.147-7.104,6.039-15.32,6.039-23.818c-0.004-9.215-2.198-18.824-6.25-28.151C442.667,266.791,436.73,257.738,429.115,249.649z"></path>
	<path class="st0" d="M218.845,198.665c-2.94-0.007-5.651,1.203-7.572,3.13c-1.928,1.92-3.138,4.635-3.134,7.568v32.118
		c-0.004,2.948,1.206,5.656,3.134,7.569c1.92,1.935,4.632,3.144,7.572,3.144h74.31c2.94,0,5.652-1.21,7.572-3.144
		c1.924-1.913,3.134-4.621,3.134-7.569v-32.118c0-2.933-1.21-5.648-3.134-7.568c-1.92-1.927-4.632-3.138-7.572-3.13H218.845z"></path>
	<path class="st0" d="M318.094,291.862c-1.199-3.286-2.455-6.422-3.752-9.384c-3.152-7.209-6.464-13.386-9.363-18.127
		c-1.446-2.37-2.792-4.403-3.992-6.042c-0.59-0.816-1.157-1.541-1.698-2.188c-0.528-0.654-1.034-1.209-1.6-1.751l-7.794,8.237
		c0.073,0.064,0.338,0.338,0.678,0.753c0.644,0.788,1.572,2.033,2.656,3.63c1.874,2.814,4.22,6.711,6.626,11.402
		c2.054,3.967,4.158,8.526,6.123,13.471h-99.957c0.665-1.66,1.334-3.286,2.03-4.847c2.922-6.71,6.017-12.471,8.638-16.762
		c1.312-2.146,2.507-3.926,3.478-5.262c0.489-0.668,0.918-1.217,1.259-1.632c0.342-0.415,0.602-0.689,0.679-0.766l-7.794-8.209
		c-0.57,0.528-1.072,1.083-1.614,1.737c-0.996,1.21-2.103,2.716-3.338,4.559c-2.167,3.221-4.685,7.456-7.294,12.52
		c-2.768,5.381-5.627,11.691-8.17,18.662c-1.045,2.877-2.041,5.859-2.951,8.947c-1.812,6.113-3.299,12.592-4.218,19.316
		c-0.678,4.903-1.072,9.897-1.072,14.99c0,4.32,0.282,8.695,0.897,13.07c0.138,0.977,0.289,1.934,0.44,2.877
		c2.093,12.542,5.905,23.178,10.741,32.111c1.097,2.047,2.258,3.995,3.454,5.873c5.138,7.984,11.057,14.406,17.016,19.499
		c8.969,7.654,18.025,12.374,24.876,15.187c2.606,1.076,4.885,1.87,6.735,2.448l4.64,31.309c0.211,1.435,1.442,2.49,2.884,2.49
		c1.446,0,2.673-1.056,2.887-2.49l4.78-32.259c0.552-0.19,1.126-0.401,1.713-0.626c8.452-3.222,21.286-9.581,33.001-21.602
		c5.261-5.395,10.301-11.951,14.547-19.829c0.478-0.865,0.932-1.758,1.382-2.659c4.185-8.357,7.484-18.127,9.363-29.452
		c0.148-0.942,0.302-1.9,0.439-2.877c0.616-4.375,0.897-8.75,0.897-13.07c0-5.093-0.394-10.101-1.076-15.004
		C323.873,310.017,321.218,300.436,318.094,291.862z M286.43,399.928c-7.822,6.69-15.82,10.847-21.816,13.316
		c-3.01,1.231-5.504,2.04-7.217,2.532c-0.542,0.162-1.006,0.288-1.382,0.38c-3.532-0.893-15.039-4.361-26.843-13.33
		c-6.348-4.811-12.796-11.184-18.264-19.653h90.182C296.654,390.038,291.579,395.531,286.43,399.928z M314.229,346.608
		c-0.215,1.52-0.468,3.004-0.749,4.453H198.502c-0.274-1.449-0.517-2.933-0.732-4.453c-0.542-3.826-0.781-7.667-0.781-11.494
		c0-3.728,0.229-7.449,0.658-11.135h116.694c0.436,3.686,0.665,7.408,0.665,11.135C315.006,338.941,314.771,342.782,314.229,346.608
		z"></path>
    </g>
    
`
      

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
    
  },
  template: `
  // v-if="scrollY > 500"
  <nav id="header" :class="{ '-fixed': scrollY > 500 }" >
  
  <div class="nav__wrap">
  <div>
  <h1 id="sitetitle">
  <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" v-html="beeIcon">
  </svg>
  {{ siteTitle }}
  </h1>
  </div>
  <ul>
  <li v-for="list in lists">
  <a href="">{{ list }}</a>
  </li>
  </ul>
  <span></span>
  </div>
  </nav>
  
  `
  
}

var modal = {
  data: function () {
    return {
      show: true
    }
  },
  template: `
  <transition name="slideIn">
    <div class="modal" v-if="show">
        Modal
    </div>
  </transition>
`
}

var demo = {
  data: function () {
    return {
      show: true,
      targetRect: 0,
      hiddenStyle: {}
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.waypoint()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // タイトルを取得
      const title = document.querySelector(`.sample__title--hidden`);
      // タイトルの座標を取得
      const rect = title.getBoundingClientRect().top;

      // data()のtargetRectを更新
      this.targetRect = rect;
      // タイトルの座標がTOPから15px以上になったら隠す
      if (this.targetRect > 400) {
        this.$set(this.hiddenStyle, 'visibility', 'hidden');
      } else {
        this.$set(this.hiddenStyle, 'visibility', 'visible');
      }
    },
    waypoint () {
      let elem = this.$el.querySelectorAll('.fade_in')
      elem.forEach(x => {
        this.waypoint = new window.Waypoint({
          element: x,
          handler: () => {
            x.classList.add('visible')
          },
          offset: '80%',
        })
      })
    },
    
  },
  beforeDestroy: function () {
    this.waypoint.destroy()
  },
  template: `
  
  <div id="demo">
  <div class="sample">
    <!-- スクロールすると消えるタイトル -->
    <h2 :style="hiddenStyle" class="sample__title--hidden">タイトル</h2>
  </div>
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
  <div class="fade_in" v-if="show">
  ああああああ
  </div>
`
}
// Vue.component('menu', {
//   data: function () {
//     return {
//       lists: [
//         "Home",
//         "Rooms",
//         "Services",
//         "About Us",
//         "Blog",
//         "Contact",
//       ]
//     }
//   },
//   template: `
//               <ul>
//               <li v-for="list in lists">{{ list }}</li>
//               </ul>
//               `
// }),
var animationBox = {
  mounted () {
    this.waypoint()
  },
  methods: {
    waypoint () {
      let elem = this.$el.querySelectorAll('.animation-box')
      elem.forEach(x => {
        this.waypoint = new window.Waypoint({
          element: x,
          handler: () => {
            x.classList.add('active')
          },
          offset: '80%',
        })
      })
    },
  },
  beforeDestroy: function () {
    this.waypoint.destroy()
  },
  template: `

  <div class="animation-box" style="margin-top:150vh;">
    <h2 class=" animated bounce">section1</h2>
    <p>このボックスが画面上から70％の位置に来たら背景色を変更します。</p>
  </div>
  `
}
Vue.component('menulist', {
  data: function () {
    return {
      message: "Hello Vue.js !",
      lists: [
        "Home",
        "Rooms",
        "Services",
        "About Us",
        "Blog",
        "Contact",
      ],
      characters: [
        'スコール',
        'ラグナ',
        'レイン',
      ]
    }
  },
  template: `
  <ul>
  <li v-for="list in lists">{{ list }}</li>
  </ul>
  `
})

var vm = new Vue({
  el: '.coding_03',
  components: {
    'nav-bar': nav,
    'modal': modal,
    'demo' : demo,
    'animation-box' : animationBox,
    Hooper: window.Hooper.Hooper,
    Slide: window.Hooper.Slide
  }
});