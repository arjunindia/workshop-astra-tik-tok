(this["webpackJsonptik-tok-stargate"]=this["webpackJsonptik-tok-stargate"]||[]).push([[0],{1916:function(e,s,t){},1917:function(e,s,t){"use strict";t.r(s);t(194),t(195),t(196),t(197),t(198),t(199),t(200),t(201),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(218),t(219),t(80),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(229),t(230),t(231),t(232),t(234),t(235),t(236),t(237),t(238),t(239),t(240),t(241),t(242),t(243),t(244),t(245),t(247),t(248),t(249),t(250),t(251),t(252),t(253),t(254),t(255),t(256),t(257),t(258),t(260),t(261),t(262),t(263),t(264),t(265),t(266),t(267),t(269),t(270),t(271),t(272),t(273),t(274),t(275),t(276),t(277),t(278),t(279),t(280),t(281),t(282),t(283),t(284),t(285),t(286),t(287),t(288),t(289),t(291),t(292),t(293),t(294),t(299),t(300),t(301),t(303),t(304),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(313),t(155),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(158),t(323),t(324),t(325),t(326),t(327),t(328),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(384),t(385),t(386),t(387),t(388),t(389),t(391),t(392),t(393),t(394),t(397),t(168);var c=t(2),n=t.n(c),i=t(191),a=t.n(i),r=t(75),l=t(13),o=t(45),j=t.n(o),d=t(74),u=t(57),b=t(1),m=function(e){var s=e.user;return Object(b.jsxs)("div",{className:"section microcard",children:[Object(b.jsx)("img",{className:"user-profile",src:s.avatar,width:"100%"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"bold",children:s.username}),Object(b.jsx)("p",{children:s.name})]})]})},O=function(e){var s=e.users;return Object(b.jsxs)("div",{className:"followers-column",children:[Object(b.jsxs)("div",{className:"followers-section",children:[Object(b.jsx)("div",{className:"home"}),Object(b.jsx)("h2",{className:"bold red",children:"For You"})]}),Object(b.jsxs)("div",{className:"followers-section",children:[Object(b.jsx)("div",{className:"following"}),Object(b.jsx)("h2",{children:"Following"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"Your top accounts"}),s&&s.map((function(e,s){return Object(b.jsx)(m,{user:e},s)})),Object(b.jsx)("hr",{})]})},h=function(e){var s=e.user,t=e.toggleFollow,c=s.timestamp.slice(2,7);return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"break"}),Object(b.jsxs)("div",{className:"section",children:[Object(b.jsxs)("div",{className:"user-info",children:[Object(b.jsx)("img",{className:"user-profile",src:s.avatar,width:"100%"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h3",{className:"bold",children:s.username}),Object(b.jsx)("p",{className:"username",children:s.name}),Object(b.jsx)("p",{children:c})]}),Object(b.jsx)("p",{children:s.caption})]})]}),s.button_visible&&Object(b.jsx)("div",{className:s.is_followed?"followed-button":"follow-button",onClick:function(){return t(s)},children:s.is_followed?"Following":"Follow"})]}),Object(b.jsx)("video",{className:"video",controls:!0,children:Object(b.jsx)("source",{src:s.video,type:"video/mp4"})}),Object(b.jsxs)("div",{className:"section socials",children:[Object(b.jsx)("i",{class:"far fa-heart"}),Object(b.jsx)("div",{className:"social-tag",children:s.likes}),Object(b.jsx)("i",{class:"far fa-comment-dots"}),Object(b.jsx)("div",{className:"social-tag",children:s.comments}),Object(b.jsx)("i",{class:"far fa-share-square"})]})]})},x=function(e){var s=e.user,t=e.toggleFollow;return Object(b.jsxs)("div",{className:"section minicard",children:[Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("img",{className:"user-profile",src:s.avatar,width:"100%"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"bold",children:s.username}),Object(b.jsx)("p",{children:s.name})]})]}),s.button_visible&&Object(b.jsx)("div",{className:s.is_followed?"followed-button":"follow-button",onClick:function(){return t(s)},children:s.is_followed?"Following":"Follow"})]})},f=t(56),v=t.n(f),p=function(){var e,s,t,n=Object(c.useState)(null),i=Object(u.a)(n,2),a=i[0],r=i[1],l=Object(c.useState)(null),o=Object(u.a)(l,2),m=o[0],f=o[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/.netlify/functions/addData");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/.netlify/functions/posts");case 2:s=e.sent,console.log(s.data),r(s.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(m){var g={is_followed:!m.is_followed};v.a.put("/.netlify/functions/edit",{userId:m.id,data:g}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error("error:"+e)})).then((function(){return N()})),f(null)}(Object(c.useEffect)((function(){p(),N()}),[]),a)&&(e=a.sort((function(e,s){return e.id<s.id?1:-1})),t=a.filter((function(e){return!0===e.is_followed})).sort((function(e,s){return e.likes<s.likes?1:-1})).slice(0,5),s=a.filter((function(e){return!1===e.is_followed})).sort((function(e,s){return e.likes<s.likes?1:-1})).slice(0,5));return Object(b.jsx)(b.Fragment,{children:e&&Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{users:t}),Object(b.jsx)("div",{className:"feed",children:e.map((function(e,s){return Object(b.jsx)(h,{user:e,toggleFollow:function(e){return f(e)}},s)}))}),Object(b.jsx)("div",{className:"suggested-box",children:Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"suggested",children:[Object(b.jsx)("h2",{className:"bold",children:"Suggested accounts"}),Object(b.jsx)("div",{className:"break"}),s.map((function(e,s){return Object(b.jsx)(x,{user:e,toggleFollow:function(e){return f(e)}},s)}))]})})})]})})},N=t(192),g=t.n(N),w=function(){var e="letsgoo",s=Object(c.useState)(null),t=Object(u.a)(s,2),n=t[0],i=t[1],a=Object(c.useState)(null),r=Object(u.a)(a,2),l=r[0],o=r[1],m=(new Date).toISOString(),O=g.a.random.uuid(),h=function(){var s=Object(d.a)(j.a.mark((function s(t){var c;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:t.preventDefault(),c={id:O,name:"Le Nameless",username:e,avatar:"https://i.kym-cdn.com/photos/images/original/001/996/641/bc2.jpg",is_followed:!1,video:n,caption:l,likes:0,comments:0,timestamp:m,button_visible:!1},v.a.post("/.netlify/functions/add",c).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"upload-page",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"Upload video"}),Object(b.jsxs)("p",{children:["This video will be published to @",e]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:h,children:[Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("div",{className:"image-upload"}),Object(b.jsxs)("div",{className:"form-section",children:[Object(b.jsxs)("div",{className:"section input-section",children:[Object(b.jsx)("label",{className:"bold",children:"Caption"}),Object(b.jsx)("input",{className:"input",name:"caption",onChange:function(e){return o(e.target.value)}})]}),Object(b.jsx)("div",{className:"break"}),Object(b.jsxs)("div",{className:"section input-section",children:[Object(b.jsx)("label",{className:"bold",children:"Video Url"}),Object(b.jsx)("input",{className:"input",name:"video",onChange:function(e){return i(e.target.value)}})]})]})]}),Object(b.jsx)("button",{children:"Post"})]})})]})},k=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("div",{className:"logo"})}),Object(b.jsx)("div",{className:"upload-container",children:Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)(r.b,{to:"/upload",children:Object(b.jsx)("div",{className:"upload"})}),Object(b.jsx)("img",{className:"personal",src:"https://i.imgur.com/QwZod6m.png"})]})})]})},_=(t(169),t(1916),function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(k,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/upload",component:w}),Object(b.jsx)(l.a,{path:"/",component:p})]})]})});s.default=_;a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[1917,1,2]]]);
//# sourceMappingURL=main.fb5c253e.chunk.js.map