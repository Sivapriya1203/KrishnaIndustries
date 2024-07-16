import{r as o,j as e,M as g,G as i,p as y,T as d,c as m,s as f,P as $,u as j,B as x,t as v,q as b,v as C,d as A}from"./index-BFgOO9FV.js";import{a as u}from"./axios-CMf68hJO.js";import{_ as z,G as w,T as L,L as E}from"./TotalIncomeCard-D52V-z5G.js";import{h as T}from"./moment-G82_0lEo.js";import{T as R}from"./TextField-uMyB6taY.js";import{L as k}from"./ListItem-YrdFOudX.js";import{D,a as I,b as S}from"./DialogContent-BR2G1wlf.js";import"./OutlinedInput-CU74RVD_.js";const B=()=>{const[t,a]=o.useState([]),[n,c]=o.useState(T().format("YYYY"));o.useEffect(()=>{(async()=>{try{const p=await u.get(`${m.apiUrl}/emp_attend/empAttendChart/?empId=5&year=${n}`);a(p.data)}catch(p){console.error("Error fetching attendance data:",p)}})()},[n]);const r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h={series:t.map(s=>s.count),options:{chart:{type:"pie",height:400},labels:t.map((s,p)=>`${r[s.month-1]}: ${s.count}`),colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8","#F77E53","#DADADA"],tooltip:{y:{formatter:function(s){return s}}}}};return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsxs(i,{container:!0,spacing:y,children:[e.jsx(i,{item:!0,lg:8,md:12,sm:12,xs:12,children:e.jsx(d,{variant:"h1",className:"text-center",children:"Employee Attendance"})}),e.jsx(i,{item:!0,lg:4,md:12,sm:12,xs:12,children:e.jsx(R,{label:"Enter Year",value:n,InputLabelProps:{shrink:!0},onChange:s=>c(s.target.value)})})]}),e.jsx(z,{options:h.options,series:h.series,type:"pie",height:400})]})})};function G(t){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48c-42.9 0-84.2 13-119.2 37.5-34.2 24-60.2 57.2-75.1 96.1L58 192h45.7l1.9-5c8.2-17.8 19.4-33.9 33.5-48 31.2-31.2 72.7-48.4 116.9-48.4s85.7 17.2 116.9 48.4c31.2 31.2 48.4 72.7 48.4 116.9 0 44.1-17.2 85.7-48.4 116.9-31.2 31.2-72.7 48.4-116.9 48.4-44.1 0-85.6-17.2-116.9-48.4-14-14-25.3-30.1-33.5-47.9l-1.9-5H58l3.6 10.4c14.9 38.9 40.9 72.1 75.1 96.1C171.8 451.1 213 464 256 464c114.7 0 208-93.3 208-208S370.7 48 256 48z"},child:[]},{tag:"path",attr:{d:"M48 277.4h189.7l-43.6 44.7L224 352l96-96-96-96-31 29.9 44.7 44.7H48v42.8z"},child:[]}]})(t)}function U(t){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"},child:[]},{tag:"path",attr:{d:"M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"},child:[]}]})(t)}const N=f(g)(({theme:t})=>({backgroundColor:t.palette.warning.main,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,borderRadius:"50%",top:-160,right:-130}})),F=({isLoading:t})=>{const a=j(),n=sessionStorage.getItem("emp_id"),[c,r]=o.useState(!1),[h,s]=o.useState(""),p=()=>{u.post(`${m.apiUrl}/emp_attend/empEntry/${n}`).then(l=>{s(l.data.message),r(!0)}).catch(l=>{l.response&&(s(l.response.data.message),r(!0)),console.log("Attendance Error:",l)})};return e.jsx(e.Fragment,{children:t?e.jsx(L,{}):e.jsx(g,{children:e.jsxs(N,{border:!1,content:!1,children:[e.jsx(x,{sx:{p:2},children:e.jsx(v,{sx:{py:0},children:e.jsxs(k,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[e.jsx(E,{children:e.jsx(b,{variant:"rounded",onClick:p,sx:{...a.typography.commonAvatar,...a.typography.largeAvatar,bgcolor:a.palette.warning.dark,color:"#fff"},children:e.jsx(G,{fontSize:"inherit"})})}),e.jsx(C,{sx:{py:0,my:.45},primary:e.jsx(d,{onClick:p,className:"ms-5",variant:"h2",sx:{color:"#fff"},children:"Entry"})})]})})}),e.jsxs(D,{open:c,onClose:()=>r(!1),children:[e.jsx(I,{children:e.jsx(d,{children:h})}),e.jsx(S,{children:e.jsx(A,{onClick:()=>r(!1),children:"Close"})})]})]})})})};F.propTypes={isLoading:$.bool};const Y=f(g)(({theme:t})=>({backgroundColor:t.palette.primary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}})),_=({isLoading:t})=>{const a=j(),n=sessionStorage.getItem("emp_id"),[c,r]=o.useState(!1),[h,s]=o.useState(""),p=()=>{u.post(`${m.apiUrl}/emp_attend/empExit/${n}`).then(l=>{s(l.data.message),r(!0)}).catch(l=>{l.response&&(s(l.response.data.message),r(!0)),console.log("Attendance Error :",l)})};return e.jsx(e.Fragment,{children:t?e.jsx(L,{}):e.jsx(g,{children:e.jsxs(Y,{border:!1,content:!1,children:[e.jsx(x,{sx:{p:2},children:e.jsx(v,{sx:{py:0},children:e.jsxs(k,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[e.jsx(E,{children:e.jsx(b,{variant:"rounded",onClick:p,sx:{...a.typography.commonAvatar,...a.typography.largeAvatar,bgcolor:"primary.800",color:"#fff"},children:e.jsx(U,{fontSize:"inherit"})})}),e.jsx(C,{sx:{py:0,my:.45},primary:e.jsx(d,{onClick:p,className:"ms-5",variant:"h2",sx:{color:"#fff"},children:"Exit"})})]})})}),e.jsxs(D,{open:c,onClose:()=>r(!1),children:[e.jsx(I,{children:e.jsx(d,{children:h})}),e.jsx(S,{children:e.jsx(A,{onClick:()=>r(!1),children:"Close"})})]})]})})})};_.propTypes={isLoading:$.bool};function M(t){return w({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}const W=f(g)(({theme:t})=>({backgroundColor:t.palette.warning.main,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,borderRadius:"50%",top:-160,right:-130}})),H=()=>{const t=j(),a=sessionStorage.getItem("emp_id"),[n,c]=o.useState({created_at_count:0});return o.useEffect(()=>{(async()=>{try{const h=await u.get(`${m.apiUrl}/leads/leadsCountForEmpDashboard/${a}`);c(h.data)}catch{console.error("Leads Data can't be fetched.")}})()},[a]),e.jsx(W,{border:!1,content:!1,children:e.jsxs(x,{sx:{p:2},children:[e.jsx(x,{display:"flex",justifyContent:"center",mb:2,children:e.jsx(b,{sx:{bgcolor:t.palette.warning.dark,height:60,width:60},children:e.jsx(M,{size:40,color:"white"})})}),e.jsx(d,{variant:"h3",sx:{textAlign:"center",color:"#fff"},children:"Total Follow Leads"}),e.jsx(d,{variant:"h1",sx:{textAlign:"center",color:"#fff"},children:n.created_at_count})]})})},O=f(g)(({theme:t})=>({backgroundColor:t.palette.primary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}})),J=()=>{const t=j(),[a,n]=o.useState([]),c=sessionStorage.getItem("emp_id");return o.useEffect(()=>{u.get(`${m.apiUrl}/leads/leadsCountForEmpDashboard/${c}`).then(r=>{n(r.data)}).catch(r=>{console.log("Leads Data can't fetched.")})},[]),e.jsx(e.Fragment,{children:e.jsx(O,{border:!1,content:!1,children:e.jsxs(x,{sx:{p:2},children:[e.jsx(x,{display:"flex",justifyContent:"center",mb:2,children:e.jsx(b,{sx:{bgcolor:t.palette.primary.main,height:60,width:60},children:e.jsx(M,{size:40,color:"white"})})}),e.jsx(d,{variant:"h3",sx:{textAlign:"center",color:"#fff"},children:"Total Remember Leads"}),e.jsx(d,{variant:"h1",sx:{textAlign:"center",color:"#fff"},children:a.reminder_date_count})]})})})},P=f(g)(({theme:t})=>({backgroundColor:t.palette.primary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}})),q=()=>{const t=j(),[a,n]=o.useState([]),c=sessionStorage.getItem("emp_id");return o.useEffect(()=>{u.get(`${m.apiUrl}/customer/getCustomerByEmpId/${c}`).then(r=>{n(r.data)}).catch(r=>{console.log("Customer count is not fetched.")})}),e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsx(P,{border:!1,content:!1,children:e.jsx(x,{sx:{p:2},children:e.jsx(v,{sx:{py:0},children:e.jsxs(k,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[e.jsx(E,{children:e.jsx(b,{variant:"rounded",sx:{...t.typography.commonAvatar,...t.typography.largeAvatar,bgcolor:"primary.800",color:"#fff"}})}),e.jsx(C,{sx:{py:0,my:.45},primary:e.jsx(d,{className:"text-center",variant:"h2",sx:{color:"#fff"},children:"Customer"})}),e.jsx(C,{sx:{py:0,my:.45},primary:e.jsx(d,{className:"text-center",variant:"h2",sx:{color:"#fff"},children:a.length})})]})})})})})})},ae=()=>e.jsx(e.Fragment,{children:e.jsxs(i,{container:!0,spacing:y,children:[e.jsx(i,{item:!0,lg:4,md:6,sm:6,xs:12,children:e.jsx(q,{})}),e.jsx(i,{item:!0,lg:4,md:6,sm:6,xs:12,children:e.jsx(F,{})}),e.jsx(i,{item:!0,lg:4,md:6,sm:6,xs:12,children:e.jsx(_,{})}),e.jsx(i,{item:!0,container:!0,lg:8,md:12,sm:12,xs:12,spacing:y,children:e.jsx(i,{item:!0,xs:12,children:e.jsx(B,{})})}),e.jsxs(i,{item:!0,container:!0,lg:4,md:12,sm:12,xs:12,spacing:y,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(H,{})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(J,{})})]})]})});export{ae as default};
