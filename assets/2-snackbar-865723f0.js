import{i as t}from"./vendor-77e16229.js";import{c as i}from"./bi_x-octagon-f8316c11.js";const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB1VZNKINhHP+/M9SQj1pINsVly3CYExMH+doFpyV3XJSTFaUc5sJRrogbJx8l5ftkF5RdKKNEFil24MDze/Ss99M7Ywe/euvZ8z7P7/f/ficF5vM+KI2wUJphNTtgy8ynpqo+chbWkD3Xwffib88UvlmjyN0BPbxepyZgz3FQb22QkwMxRvTw8kXmLmkkr6OLr/cvlmghPMpF5XAW1VD08VRfwF3io5HmZb5eOQnRHiOJqSyFNzDAXeqjnKx8hQD28QTXGrQC3nI/jbQsM/UzmtkNJKxWA/tzR4OafUEOw8BhVYelv36KX57c6tS4bQY5OR7Aqj4A14dXq/+EHLDIrUdC9y+XDMPyU3KFgIslFpAfQCX8hlwh4C3v4mER1jsLPRTyH/LLqZIrBGxZBRR9Oku8wBqXBEmy5O2uIepgj8C3nSwuCgH5byPLUeaSRLQZmVUKxF6j5Cr2mYqItVFYKoo8dH5/oPXgijVFU2UfL1N1Fel5okeOSrSxrg5fryf2EjlAeQIQ0YMgXTweNUyoMCCi5wEqCCJIEAaY3pQ0IhbW6/WRRY8AswiuJguM9LG2DU5s2GgADkzvBHiDhfxH3Coz4Mw4I0fuED51/jI83dkT8g2M5Ss2x2vLWqm3LsgJMBXj78rZZM918nAONMzxcT213UOnt9saAySjb7KY9yLpyBEqTbwTXzfEHGExml+S2UcfROgPr8PPLQVABi9BbjZ1pX//r+ITYxYvDWzHcpcAAAAASUVORK5CYII=",s=document.querySelector(".form");s.addEventListener("submit",c);function c(e){e.preventDefault();const r=Number(s.delay.value);if(r<=0){t.error({title:"Error",titleColor:"#FFF",iconUrl:i,messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Enter positive number"});return}const A=s.state.value;m(r,A),s.reset()}function m(e,r){new Promise((o,l)=>{setTimeout(()=>{r==="fulfilled"?o(e):l(e)},e)}).then(o=>{t.success({title:"OK",titleColor:"#FFF",messageColor:"#FFF",iconUrl:n,color:"#59A10D",position:"topRight",message:`Fulfilled promise in ${o} ms`})}).catch(o=>{t.error({title:"Error",titleColor:"#FFF",iconUrl:i,messageColor:"#FFF",color:"#EF4040",position:"topRight",message:`Rejected promise in ${o} ms`})})}
//# sourceMappingURL=2-snackbar-865723f0.js.map
