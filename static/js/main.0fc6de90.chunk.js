(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={titleStyle:"MenuList_titleStyle__2qaLH",titleDiasable:"MenuList_titleDiasable__3PxWA MenuList_titleStyle__2qaLH",imgStyle:"MenuList_imgStyle__2nYPr"}},11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),l=n.n(c),r=n(5),s=n(6),o=n(9),u=n(7),p=n(10),m=n(1),d=n.n(m),f=function(e){var t=e.price,n=e.icon,a=e.title,c=e.disabled;return i.a.createElement("div",null,i.a.createElement("h1",{className:c?d.a.titleStyle:d.a.titleDiasable},a),i.a.createElement("img",{className:d.a.imgStyle,src:n,alt:a}),i.a.createElement("p",null,t))};f.defaultProps={price:0,icon:"",title:"",disabled:!1};var b=f,_=n(2),g=n.n(_),y=function(e){var t=e.products;return i.a.createElement("ul",{className:g.a.box},t.length>=3?t.map(function(e){return i.a.createElement("li",{className:g.a.innerBox,key:e.id},i.a.createElement(b,e))}):i.a.createElement("p",null,"false"))};y.defaultProps={products:[]};var h=y,E=n(8),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!0},n.Open=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n.Close=function(){n.setState({isOpen:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",onClick:this.Open},"Open"),i.a.createElement("button",{type:"button",onClick:this.Close},"Close"),e&&i.a.createElement(h,{products:E}))}}]),t}(a.Component);l.a.render(i.a.createElement(O,null),document.getElementById("root"))},2:function(e,t,n){e.exports={box:"Menu_box__1kdKb",innerBox:"Menu_innerBox__8odQR"}},8:function(e){e.exports=[{id:1,title:"apple",price:1234,icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfZeQfcPa39Zodu_eXAUs9xYjmRk5lBry4TWh5nCWiWLf7dka-g"},{id:2,title:"juice",price:124,icon:"https://static1.squarespace.com/static/58c931a51b10e3a1c3c3aace/t/5af641841ae6cf80fc05ff78/1532566504179/juce.png"},{id:3,title:"pineapple",price:34,icon:"https://images-na.ssl-images-amazon.com/images/I/81WJyO53YAL._SY550_.jpg"}]}},[[11,1,2]]]);
//# sourceMappingURL=main.0fc6de90.chunk.js.map