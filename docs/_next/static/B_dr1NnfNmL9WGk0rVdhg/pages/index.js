(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("b0oO"),r=a("gJ/y"),s=a("0iUn"),c=a("sLSF"),o=a("MI3g"),m=a("a7VT"),u=a("AT/M"),p=a("Tit0"),d=a("QKO/"),h=(a("Wm6p"),["../../static/data1.jpg","../../static/data2.jpg","../../static/data3.jpg","../../static/data4.jpg"]),f=function(e){function t(e){var a;return Object(s.default)(this,t),(a=Object(o.default)(this,Object(m.default)(t).call(this,e))).state={images:e.images,current:0,max:e.images.length,interval:null},a.switchImage=a.switchImage.bind(Object(u.default)(a)),a}return Object(p.default)(t,e),Object(c.default)(t,[{key:"switchImage",value:function(){var e=this.state.current+1;e==this.state.max&&(e=0),this.setState({current:e})}},{key:"componentDidMount",value:function(){this.state.interval=window.setInterval(this.switchImage,2e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.interval)}},{key:"render",value:function(){return l.a.createElement(d.Box,{width:[.9,.4]},l.a.createElement(d.Image,{src:this.state.images[this.state.current]}))}}]),t}(l.a.Component),g=function(){return l.a.createElement("div",{className:"splashpage"},l.a.createElement(d.Flex,{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",style:{marginTop:"10%"}},l.a.createElement(f,{images:h}),l.a.createElement(d.Box,{width:[.9,.3],className:"splashpage-content"},l.a.createElement("h2",{className:"date"},"Jan 24 - 25th 2020"),l.a.createElement(d.Box,{ml:"auto",mr:"auto",mt:40},l.a.createElement("div",{className:"intro-link"},l.a.createElement("h4",{className:"sign-up-link-text"},"Sign Up"),l.a.createElement("p",{className:"sign-up-link-alt"},"Registration will open fall 2019"))),l.a.createElement(d.Box,{ml:"auto",mr:"auto",mt:20,className:"sponsor-button"},l.a.createElement("a",{href:"../../static/SponsorshipPacket.pdf",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"intro-link"},l.a.createElement("h4",{className:"sponsor-link-text"},"Become a Sponsor")))))))};a("ETxl"),t.default=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null),l.a.createElement(r.a,null),l.a.createElement(g,null))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,2]]]);