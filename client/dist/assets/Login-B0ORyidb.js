import{r as o,u as B,a as I,b as P,c as k,j as e,G as t,B as x,T as h,A as D,d as F,L,e as W,S as _,D as M}from"./index-BFgOO9FV.js";import{F as T,c as q,a as w,d as z,b as H,A as U,e as $,f as G}from"./AuthFooter-IyGmUEUk.js";import{a as O}from"./axios-CMf68hJO.js";import{F as f,I as y,O as b,a as p}from"./OutlinedInput-CU74RVD_.js";import{I as V,a as K}from"./InputAdornment-DDYrV0kf.js";import"./Link-DdbuU71-.js";const Q=({...m})=>{const[j,c]=o.useState([]),r=B();I(r.breakpoints.down("md")),P(s=>s.customization),o.useState(!0);const[u,S]=o.useState(!1),v=()=>{S(!u)},A=s=>{s.preventDefault()};o.useEffect(()=>{O.get(`${k.apiUrl}/employee`).then(s=>{c(s.data),console.log("Employee Data :",s.data)}).catch(s=>{console.log("Error, can't fetch employee data. Try again later.")})},[]);const C="krishnaindustries@gmail.com",E="Krishna@123";return e.jsxs(e.Fragment,{children:[e.jsx(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(x,{sx:{mb:2},children:e.jsx(h,{variant:"subtitle1",children:"Sign in with Email address"})})})}),e.jsx(T,{initialValues:{email:"",password:"",submit:null},validationSchema:q().shape({email:w().email("Must be a valid email").max(255).required("Email is required"),password:w().max(255).required("Password is required")}),onSubmit:(s,{setErrors:a,setStatus:l,setSubmitting:d})=>{try{if(s.email===C&&s.password===E)sessionStorage.setItem("adminLoggedIn","true"),window.location.reload();else{const n=j.find(i=>i.emp_email===s.email&&i.emp_mobile===s.password);n?(sessionStorage.setItem("employeeLoggedIn","true"),sessionStorage.setItem("emp_id",n.emp_id),window.location.reload()):a({submit:"Invalid username or password"})}d(!1)}catch(n){console.error(n),l({success:!1}),a({submit:n.message}),d(!1)}},children:({errors:s,handleBlur:a,handleChange:l,handleSubmit:d,isSubmitting:n,touched:i,values:g})=>e.jsxs("form",{noValidate:!0,onSubmit:d,...m,children:[e.jsxs(f,{fullWidth:!0,error:!!(i.email&&s.email),sx:{...r.typography.customInput},children:[e.jsx(y,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(b,{id:"outlined-adornment-email-login",type:"email",value:g.email,name:"email",onBlur:a,onChange:l,label:"Email Address / Username",inputProps:{}}),i.email&&s.email&&e.jsx(p,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(f,{fullWidth:!0,error:!!(i.password&&s.password),sx:{...r.typography.customInput},children:[e.jsx(y,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(b,{id:"outlined-adornment-password-login",type:u?"text":"password",value:g.password,name:"password",onBlur:a,onChange:l,endAdornment:e.jsx(V,{position:"end",children:e.jsx(K,{"aria-label":"toggle password visibility",onClick:v,onMouseDown:A,edge:"end",size:"large",children:u?e.jsx(z,{}):e.jsx(H,{})})}),label:"Password",inputProps:{}}),i.password&&s.password&&e.jsx(p,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),s.submit&&e.jsx(x,{sx:{mt:3},children:e.jsx(p,{error:!0,children:s.submit})}),e.jsx(x,{sx:{mt:2},children:e.jsx(D,{children:e.jsx(F,{disableElevation:!0,disabled:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})})]})},ee=()=>{const m=I(r=>r.breakpoints.down("md")),[j,c]=o.useState(!1);return e.jsx(U,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx($,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(L,{to:"#","aria-label":"logo",children:e.jsx(W,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(_,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(h,{color:"secondary.main",gutterBottom:!0,variant:m?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(h,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(Q,{setLogIIn:c})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(M,{})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(G,{})})]})})};export{ee as default};