(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/H28":function(t,e,s){"use strict";var a=s("z/o8"),n={props:["content"],data:function(){return{show:!0}},components:{gsap:a.a},methods:{toggle:function(){this.show?(this.play(),this.show=!1):(this.back(),this.show=!0)},play:function(){a.a.to(".content",{duration:.4,ease:"elastic.out(1, 1)",height:"auto",webkitMaskImage:"linear-gradient(to top, rgba(255,255,255,0), 0%, rgba(255,255,255, 1))"}),a.a.to(".fa-chevron-down",{duration:.4,ease:"elastic.out(1, 1)",rotation:180})},back:function(){a.a.to(".content",{duration:.4,ease:"elastic.out(1, 1)",height:"100px",webkitMaskImage:"linear-gradient(to top, rgba(255,255,255,0), 10%, rgba(255,255,255, 1))"}),a.a.to(".fa-chevron-down",{duration:.4,ease:"elastic.out(1, 1)",rotation:0})}}},i=(s("oE8J"),s("KHd+")),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center mb-5"},[t.content.length>=500?s("div",{staticClass:"col-12 content"},[s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-center",domProps:{innerHTML:t._s(t.content)}})]):t._e(),t.content.length>=500?s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn-b-gone",on:{click:function(e){return t.toggle()}}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12"},[this.show?[s("p",[t._v("læs mere")])]:[s("p",[t._v("læs mindre")])]],2),s("div",{staticClass:"col-auto"},[s("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1)])])]):t._e(),t.content.length<=499?s("div",{staticClass:"col-12"},[s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-center",domProps:{innerHTML:t._s(t.content)}})]):t._e()])}),[],!1,null,null,null);e.a=o.exports},"5KBX":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAABWBJREFUSEuFVltsVUUUXXvmnHNfbe/t7W1tbaEP2kIfYKEolFqtBCIYRMXyYUSDJvpDMPHDf4xo+Ib4Yfzzxw8Sgxg0qAFiE5VURSUU1MtDQSiWUioFeh9nxnXuJfJooZNOz5kze9bajzW7Fcw8BBsrY/DiCtkJg92j12lmZjJduxWhJJKhYO8ykpkvdqUzt9vJ/4sPul2MJRoRVg3QthZ5PEjICGANXD0O6/4JuKcwcSX94ZobCce1jRk4zX5OHvDztjTAUUomxbGXYPzjUCa95ZGhkSLBtnYPkdoUIKvh2R6IdMKihTtxPoUnR2HVEIwzWBq5uu/trqnGuIuVOaueMFaaGFqiQABcoUNnxfj7Ycz+nJYfigQ7Vi2Eo/r4tgnKpgiZp3mUxuUkLeF3rjFBgLO1JWbPQMNUS1OJeUwgSQtERKADGGvh07kMwScg5itB9qBgc0MYHfMGoPTLEPswAUlqr/AxzjNVnDUFJyzGReF8zMOxVdXZssUVfn2paxu0MI02OHNzCGmKB/6wxk8LXq+vQUvzVmj9BkHDdCPLCMY5T5CslutWgjNRkqYDp/gWbU/kJ3uZ+aYy0xsSmyw6dfcwOZLkBO8uXY1Q6YtQ7qYg2wTwg3RwHuS6geslfM8xdQfgmCPI6w1Jz449VJ7/q68m31/ioJL7zjR8oTgMY8N7vesRijzPFA3QKESPA2+CFO3ls5nrxST6id6P8Ckw8njYwemmuD+8ri7XFXfNXMIwijuH3EyVYMfKp+E6a6mUpwgWyDLw5l+I+ozvzZwdlNw+ekPZqiWkqNTa/lJdZo8MzMnUJV3bTp+aphMwdg7B9mUvIRabBy9cj6xlaizFEgTtn6RJDXyZT++TJJhL82ruu7wnB1NR/5sN9X5VhWt7xKB7eoroLikE7yzfgGisl1H0MPvXCroX/lZmhNIdK6Qshyf5pa5ArtUJEp6MefbvVdX5bH3U9LhiH51e5EC1Adj2x1Yg4m1mSl6hkSrAB7oXXIQj3xIwjYz/As2DYk7AVQd4Tntiy7rL8ycWxM3SmGP7pxFYFjmoGN7sSKKuagu0s5XFCm4kayAMzlI5OAzXHkVeFvET1+YyDJXvo4FeJ9vj+c/bE7ZjRgKx1+kp50bewhV9ayD6OcDrIklFgcQSUOMMHGrf8NJZtg3Yau7PhbHVDis1v9zf21pqFkQVgi5QGExosbgGx2hyrHhB3u+cAxPuhEmsp1ICRcQo0yw9zvIIC68HSVjP08v5XEQIz9H28vyU/bohalpClv3rJjhjZ9XMFJ3a62ew71azK4tXwi19hoeZDqmhmceZ5GSnZDcVdYF+sc/4qwMpuxr/tKXUbynHb3KR7ywQFH5wQzzzI7v7R95FvefWFd+5NgQ/38bCMlzpYcNqo3kVvWavCW6yUD3qHHzTK8pmedlG58WtW8rWrmCK/Qq4oJQ9rlzzidHm0OCzg8N39xCFXSv72ZbXwQ+UIVVUQnDxgvZxOgDgbNUKkzHXTtRGTQd7EWsmLlN/le1kyLrmwOTVqY/Trx0+T1uq6O6xc1kZMvEKelpLSbbCkwYCJBiRZnE11ZRwNEJRByUJxy5xig5c1Cr7qWhzQCv1s5wcGxveNsz6BRdt5sEu2x1BY6IaITMHnqIAVBsJ6gNvSSAh15ooc0e5ndHWHteSGcp4N9Ijrx4ZvR3yXgRFm36e729NIJXqpcr6YPVCBq1IcM1xcIn9/leTtd/nvvv9KHafmyrW+c5xf4Igwm28DfGuEkisDDYSQy4T4Z3JhsPetSnfv46cnsRbXwb/FEwDv1+K7pE5Em6Ei1G2vkOFP6OzjtkimBVgNoP/AHjBF0Tw7bq1AAAAAElFTkSuQmCC"},Yc3W:function(t,e,s){},kJSf:function(t,e,s){"use strict";s("Yc3W")},o1AR:function(t,e,s){},oE8J:function(t,e,s){"use strict";s("o1AR")},oenB:function(t,e,s){"use strict";s.r(e);var a=s("4aBo"),n=s("nY3v"),i={props:["isJourney","vegan","daily"]},o=s("KHd+"),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"row",class:{"justify-content-center":t.isJourney}},[a("div",{class:t.isJourney?"col-auto":"col"},[a("h5",{staticClass:"up"},[t._t("title"),t.vegan?[a("img",{attrs:{src:s("5KBX"),alt:""}})]:t._e()],2)]),a("div",{staticClass:"col-auto"},[t.isJourney?[a("h5",[t._t("price")],2)]:[a("p",{staticClass:"price"},[t._t("price")],2)]],2)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",[t._t("description")],2)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("i",[t._t("test")],2)])])])}),[],!1,null,null,null).exports,l=s("/H28"),r=s("B25C"),d={data:function(){return{show:!0}},metaInfo:{title:"Restauranten - Menu"},components:{Nav:n.a,Header:a.a,Food:c,Foldy:l.a,Footer:r.a}},g=(s("kJSf"),null),m=Object(o.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Nav"),s("Header",{attrs:{image:t.$page.page.image}}),s("div",{staticClass:"container"},[s("Foldy",{attrs:{content:t.$page.page.content}}),s("div",{staticClass:"row justify-content-center text-center"},[s("div",{staticClass:"col-lg-7 mt-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"up",domProps:{innerHTML:t._s(t.$page.page.journey)}})]),s("div",{staticClass:"col-12"},[t._l(t.$page.journey.edges,(function(e){return[s("Food",{key:e.node.id,staticClass:"mb-3",attrs:{isJourney:!0}},[s("template",{slot:"title"},[t._v("\n                  "+t._s(e.node.title)+"\n                ")]),s("template",{slot:"price"},[e.node.daily?[t._v("\n                    "+t._s(e.node.price)+"\n                  ")]:[t._v(" "+t._s(e.node.price)+",- ")]],2),s("template",{slot:"description"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})]),s("template",{slot:"test"},[t._v("\n                  "+t._s(e.node.subtitle)+"\n                ")])],2)]}))],2)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12 mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"up",domProps:{innerHTML:t._s(t.$page.page.shareFood)}})]),s("div",{staticClass:"col-12"},[t._l(t.$page.shareFood.edges,(function(e){return[s("Food",{key:e.node.id,staticClass:"mb-2"},[s("template",{slot:"title"},[t._v("\n                  "+t._s(e.node.title)+"\n                ")]),s("template",{slot:"price"},[e.node.daily?[t._v("\n                    "+t._s(e.node.price)+"\n                  ")]:[t._v(" "+t._s(e.node.price)+",- ")]],2),s("template",{slot:"description"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})]),s("template",{slot:"test"},[t._v("\n                  "+t._s(e.node.subtitle)+"\n                ")])],2)]}))],2)])]),s("div",{staticClass:"col-lg-6 col-12 mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"up",domProps:{innerHTML:t._s(t.$page.page.snack)}})]),s("div",{staticClass:"col-12"},[t._l(t.$page.snack.edges,(function(e){return[s("Food",{key:e.node.id,staticClass:"mb-2"},[s("template",{slot:"title"},[t._v("\n                  "+t._s(e.node.title)+"\n                ")]),s("template",{slot:"price"},[e.node.daily?[t._v("\n                    "+t._s(e.node.price)+"\n                  ")]:[t._v(" "+t._s(e.node.price)+",- ")]],2),s("template",{slot:"description"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})]),s("template",{slot:"test"},[t._v("\n                  "+t._s(e.node.subtitle)+"\n                ")])],2)]}))],2)])]),s("div",{staticClass:"col-lg-6 col-12 mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"up",domProps:{innerHTML:t._s(t.$page.page.daily)}})]),s("div",{staticClass:"col-12"},[t._l(t.$page.daily.edges,(function(e){return[e.node.hide?t._e():[s("Food",{key:e.node.id,staticClass:"mb-2",attrs:{vegan:e.node.vegan}},[s("template",{slot:"title"},[t._v("\n                    "+t._s(e.node.title)+"\n                  ")]),s("template",{slot:"price"},[e.node.daily?[t._v("\n                      "+t._s(e.node.price)+"\n                    ")]:[t._v(" "+t._s(e.node.price)+",- ")]],2),s("template",{slot:"description"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})]),s("template",{slot:"test"},[t._v("\n                    "+t._s(e.node.subtitle)+"\n                  ")])],2)]]}))],2)])]),s("div",{staticClass:"col-lg-6 col-12 mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"up",domProps:{innerHTML:t._s(t.$page.page.dessert)}})]),s("div",{staticClass:"col-12"},[t._l(t.$page.dessert.edges,(function(e){return[s("Food",{key:e.node.id,staticClass:"mb-2"},[s("template",{slot:"title"},[t._v("\n                  "+t._s(e.node.title)+"\n                ")]),s("template",{slot:"price"},[e.node.daily?[t._v("\n                    "+t._s(e.node.price)+"\n                  ")]:[t._v(" "+t._s(e.node.price)+",- ")]],2),s("template",{slot:"description"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})]),s("template",{slot:"test"},[t._v("\n                  "+t._s(e.node.subtitle)+"\n                ")])],2)]}))],2)])])]),t._m(0)],1),s("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-auto"},[e("button",{staticClass:"black-btn menu-btn mb-5 mt-5"},[e("a",{attrs:{href:"https://book.easytablebooking.com/book/?id=f4b9d&lang=da",target:"_blank"}},[e("h3",{staticClass:"up"},[e("b",[this._v("BOOK BORD")])])])])])])}],!1,null,null,null);"function"==typeof g&&g(m);e.default=m.exports},"z/o8":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var a=s("pc+1"),n=s("nOaX"),i=a.x.registerPlugin(n.a)||a.x;i.core.Tween}}]);