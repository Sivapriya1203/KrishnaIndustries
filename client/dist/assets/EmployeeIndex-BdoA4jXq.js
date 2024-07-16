import{r as n,c as k,j as a,G as h,d as f,w as F,S as I}from"./index-BFgOO9FV.js";import{a as D}from"./axios-CMf68hJO.js";import{S as $,T as O,a as Y,b as Z,c as A,d as c,e as Q}from"./Search-BptgNfeq.js";import{T as g,S as X}from"./TextField-uMyB6taY.js";import{M as b}from"./MenuItem-DdWCPvaA.js";import{F as aa}from"./OutlinedInput-CU74RVD_.js";import{P as ea}from"./Pagination-Jcemn9fm.js";import{D as v,a as R,b as w}from"./DialogContent-BR2G1wlf.js";import{D as ra}from"./DialogTitle-Bwjr3vop.js";const ta=[{state:"Andhra Pradesh",districts:["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},{state:"Arunachal Pradesh",districts:["Tawang","West Kameng","East Kameng","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"]},{state:"Assam",districts:["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]},{state:"Bihar",districts:["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},{state:"Chandigarh (UT)",districts:["Chandigarh"]},{state:"Chhattisgarh",districts:["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},{state:"Dadra and Nagar Haveli (UT)",districts:["Dadra & Nagar Haveli"]},{state:"Daman and Diu (UT)",districts:["Daman","Diu"]},{state:"Delhi (NCT)",districts:["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"]},{state:"Goa",districts:["North Goa","South Goa"]},{state:"Gujarat",districts:["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"]},{state:"Haryana",districts:["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},{state:"Himachal Pradesh",districts:["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"]},{state:"Jammu and Kashmir",districts:["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]},{state:"Jharkhand",districts:["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"]},{state:"Karnataka",districts:["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"]},{state:"Kerala",districts:["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]},{state:"Lakshadweep (UT)",districts:["Agatti","Amini","Androth","Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni","Kilthan","Minicoy"]},{state:"Madhya Pradesh",districts:["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{state:"Maharashtra",districts:["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]},{state:"Manipur",districts:["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]},{state:"Meghalaya",districts:["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]},{state:"Mizoram",districts:["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},{state:"Nagaland",districts:["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},{state:"Odisha",districts:["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"]},{state:"Puducherry (UT)",districts:["Karaikal","Mahe","Pondicherry","Yanam"]},{state:"Punjab",districts:["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"]},{state:"Rajasthan",districts:["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{state:"Sikkim",districts:["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},{state:"Tamil Nadu",districts:["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]},{state:"Telangana",districts:["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"]},{state:"Tripura",districts:["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]},{state:"Uttarakhand",districts:["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]},{state:"Uttar Pradesh",districts:["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]},{state:"West Bengal",districts:["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]}],W={states:ta},ia=({onClose:y})=>{const[m,P]=n.useState([]),[B,N]=n.useState([]),[_,T]=n.useState([]),[C,E]=n.useState([]),[s,d]=n.useState({dept_id:"",role_id:"",lang_id:"",emp_name:"",emp_email:"",emp_mobile:"",state:"",dist:"",city:"",hire_date:""}),[l,u]=n.useState({dept_id:"",role_id:"",lang_id:"",emp_name:"",emp_email:"",emp_mobile:"",state:"",dist:"",city:"",hire_date:""});n.useEffect(()=>{if(s.state){const t=W.states.find(e=>e.state===s.state);t&&(E(t.districts),d({...s,dist:""}))}},[s.state]);const K=(t,e)=>{let r="";const i=e&&typeof e=="string"?e.trim():e;switch(t){case"emp_name":i||(r="Employee Name is Required");break;case"emp_email":i||(r="Employee Email is Required");break;case"emp_mobile":i||(r="Employee Mobile is Required");break;case"dept_id":i||(r="Department is Required");break;case"role_id":i||(r="Role is Required");break;case"lang_id":i||(r="Language is Required");break;case"state":i||(r="State is Required");break;case"dist":i||(r="District is Required");break;case"city":i||(r="City is Required");break;case"hire_date":i||(r="Hire Date is Required");break}return r},j=t=>{const{name:e,value:r}=t.target,i=K(e,r);d({...s,[e]:r}),u({...l,[e]:i})};n.useEffect(()=>{D.get(`${k.apiUrl}/department`).then(t=>{P(t.data),d({...s,role_id:""})}).catch(t=>{console.log("Error :",t)})},[]),n.useEffect(()=>{s.dept_id?D.get(`${k.apiUrl}/role/getRoleByDept?dept_id=${s.dept_id}`).then(t=>{N(t.data)}).catch(t=>{console.log("Error :",t)}):a.Fragment},[s.dept_id]),n.useEffect(()=>{D.get(`${k.apiUrl}/language`).then(t=>{T(t.data)}).catch(t=>{console.log("Error :",t)})});const x=async t=>{t.preventDefault();let e={};if(Object.keys(s).forEach(r=>{const i=s[r],p=K(r,i);p&&(e[r]=p)}),Object.keys(e).length>0){u(e);return}D.post(`${k.apiUrl}/employee/saveEmp`,s).then(r=>{console.log("Employee Data stored successfully."),y()}).catch(r=>{console.log("Error :",r)})};return a.jsxs("div",{children:[a.jsx("h1",{className:"text-center",children:"Add Employee"}),a.jsx("form",{onSubmit:x,children:a.jsxs(h,{container:!0,spacing:2,children:[a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_name",label:"Employee Name",value:s.emp_name,onChange:j,error:!!l.emp_name,helperText:l.emp_name})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_email",label:"Employee Email",value:s.emp_email,onChange:j,error:!!l.emp_email,helperText:l.emp_email})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_mobile",label:"Employee Mobile",type:"number",value:s.emp_mobile,onChange:j,error:!!l.emp_mobile,helperText:l.emp_mobile})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"dept_id",label:"Department",value:s.dept_id,onChange:j,error:!!l.dept_id,helperText:l.dept_id,children:m.map((t,e)=>a.jsx(b,{value:t.dept_id,children:t.dept_name},e))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"role_id",label:"Role",value:s.role_id,onChange:j,error:!!l.role_id,helperText:l.role_id,children:B.map((t,e)=>a.jsx(b,{value:t.role_id,children:t.role},e))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"lang_id",label:"Language",value:s.lang_id,onChange:j,error:!!l.lang_id,helperText:l.lang_id,children:_.map((t,e)=>a.jsx(b,{value:t.lang_id,children:t.language_name},e))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"state",label:"State",value:s.state,onChange:j,error:!!l.state,helperText:l.state,children:W.states.map((t,e)=>a.jsx(b,{value:t.state,children:t.state},e))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"dist",label:"District",value:s.dist,onChange:j,error:!!l.dist,helperText:l.dist,children:C.map((t,e)=>a.jsx(b,{value:t,children:t},e))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"city",label:"City",value:s.city,onChange:j,error:!!l.city,helperText:l.city})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"hire_date",label:"Hire date",type:"date",value:s.hire_date,onChange:j,error:!!l.hire_date,helperText:l.hire_date,InputLabelProps:{shrink:!0}})}),a.jsx(h,{item:!0,xs:12,display:"flex",justifyContent:"center",children:a.jsx(f,{onClick:x,children:"Submit"})})]})})]})},na=({onClose:y,data:m})=>{const[P,B]=n.useState([]),[N,_]=n.useState([]),[T,C]=n.useState([]),[E,s]=n.useState([]),[d,l]=n.useState({dept_id:m?m.dept_id:"",role_id:m?m.role_id:"",lang_id:m?m.lang_id:"",emp_name:m?m.emp_name:"",emp_email:m?m.emp_email:"",emp_mobile:m?m.emp_mobile:"",state:m?m.state:"",dist:m?m.dist:"",city:m?m.city:"",hire_date:m?m.city:""}),[u,K]=n.useState({dept_id:"",role_id:"",lang_id:"",emp_name:"",emp_email:"",emp_mobile:"",state:"",dist:"",city:"",hire_date:""});n.useEffect(()=>{if(d.state){const e=W.states.find(r=>r.state===d.state);e&&(s(e.districts),l({...d,dist:""}))}},[d.state]);const j=(e,r)=>{let i="";const p=r&&typeof r=="string"?r.trim():r;switch(e){case"emp_name":p||(i="Employee Name is Required");break;case"emp_email":p||(i="Employee Email is Required");break;case"emp_mobile":p||(i="Employee Mobile is Required");break;case"dept_id":p||(i="Department is Required");break;case"role_id":p||(i="Role is Required");break;case"lang_id":p||(i="Language is Required");break;case"state":p||(i="State is Required");break;case"dist":p||(i="District is Required");break;case"city":p||(i="City is Required");break;case"hire_date":p||(i="Hire Date is Required");break}return i},x=e=>{const{name:r,value:i}=e.target,p=j(r,i);l({...d,[r]:i}),K({...u,[r]:p})};n.useEffect(()=>{D.get(`${k.apiUrl}/department`).then(e=>{B(e.data),l({...d,role_id:""})}).catch(e=>{console.log("Error :",e)})},[]),n.useEffect(()=>{D.get(`${k.apiUrl}/role/getRoleByDept?dept_id=${d.dept_id}`).then(e=>{_(e.data)}).catch(e=>{console.log("Error :",e)})},[d.dept_id]),n.useEffect(()=>{D.get(`${k.apiUrl}/language`).then(e=>{C(e.data)}).catch(e=>{console.log("Error :",e)})});const t=async e=>{e.preventDefault();let r={};if(Object.keys(d).forEach(i=>{const p=d[i],M=j(i,p);M&&(r[i]=M)}),Object.keys(r).length>0){K(r);return}D.put(`${k.apiUrl}/employee/update/${m.emp_id}`,d).then(i=>{console.log("Employee Data stored successfully."),y()}).catch(i=>{console.log("Error :",i)})};return a.jsxs("div",{children:[a.jsx("h1",{className:"text-center",children:"Add Employee"}),a.jsxs(h,{container:!0,spacing:2,children:[a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_name",label:"Employee Name",value:d.emp_name,onChange:x,error:!!u.emp_name,helperText:u.emp_name})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_email",label:"Employee Email",value:d.emp_email,onChange:x,error:!!u.emp_email,helperText:u.emp_email})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"emp_mobile",label:"Employee Mobile",type:"number",value:d.emp_mobile,onChange:x,error:!!u.emp_mobile,helperText:u.emp_mobile})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"dept_id",label:"Department",value:d.dept_id,onChange:x,error:!!u.dept_id,helperText:u.dept_id,children:P.map((e,r)=>a.jsx(b,{value:e.dept_id,children:e.dept_name},r))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"role_id",label:"Role",value:d.role_id,onChange:x,error:!!u.role_id,helperText:u.role_id,children:N.map((e,r)=>a.jsx(b,{value:e.role_id,children:e.role},r))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"lang_id",label:"Language",value:d.lang_id,onChange:x,error:!!u.lang_id,helperText:u.lang_id,children:T.map((e,r)=>a.jsx(b,{value:e.lang_id,children:e.language_name},r))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"state",label:"State",value:d.state,onChange:x,error:!!u.state,helperText:u.state,children:W.states.map((e,r)=>a.jsx(b,{value:e.state,children:e.state},r))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{select:!0,fullWidth:!0,name:"dist",label:"District",value:d.dist,onChange:x,error:!!u.dist,helperText:u.dist,children:E.map((e,r)=>a.jsx(b,{value:e,children:e},r))})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"city",label:"City",value:d.city,onChange:x,error:!!u.city,helperText:u.city})}),a.jsx(h,{item:!0,xs:6,children:a.jsx(g,{fullWidth:!0,name:"hire_date",label:"Hire date",type:"date",value:d.hire_date,onChange:x,error:!!u.hire_date,helperText:u.hire_date,InputLabelProps:{shrink:!0}})}),a.jsx(h,{item:!0,xs:12,display:"flex",justifyContent:"center",children:a.jsx(f,{onClick:t,children:"Update"})})]})]})};function ga(){const[y,m]=n.useState([]),[P,B]=n.useState([]),[N,_]=n.useState(""),[T,C]=n.useState(!1),[E,s]=n.useState(!1),[d,l]=n.useState(!1),[u,K]=n.useState(),[j,x]=n.useState(!1),[t,e]=n.useState(),[r,i]=n.useState(5),[p,M]=n.useState(1);n.useEffect(()=>{D.get(`${k.apiUrl}/employee/`).then(o=>{m(o.data),B(o.data)}).catch(o=>{const S=o.response?o.response.data.message:o.message;_(S),C(!0)})},[d,E,j]);const G=o=>{const S=y.find(V=>V.emp_id===o);S&&(e(S),x(!0))},U=o=>{K(o),l(!0)},H=()=>{D.delete(`${k.apiUrl}/employee/delete/${u}`).then(o=>{l(!1)}).catch(o=>{l(!1),C(!0),_("Error deleting data. Please try again later.")})},J=o=>{const S=parseInt(o.target.value,10);S==1?(i(y.length),M(1)):(i(S),M(1))},L=(p-1)*r,z=p*r,q=P.slice(L,z);return a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"text-center",children:"Employee Index"}),a.jsxs(h,{container:!0,spacing:2,className:"mt-3",children:[a.jsx(h,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:a.jsx(f,{onClick:()=>s(!0),children:"Add New Employee"})}),a.jsx(h,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:a.jsx($,{data:y,setData:B})}),a.jsx(h,{item:!0,xs:4,sx:{display:"flex",justifyContent:"center"},children:a.jsx(aa,{children:a.jsxs(X,{value:r,onChange:J,children:[a.jsx(b,{value:5,children:"5 Per Page"}),a.jsx(b,{value:10,children:"10 Per Page"}),a.jsx(b,{value:15,children:"15 Per Page"}),a.jsx(b,{value:1,children:"All Per Page"})]})})})]}),a.jsx(O,{component:F,className:"mt-3",children:a.jsxs(Y,{children:[a.jsx(Z,{children:a.jsxs(A,{children:[a.jsx(c,{style:{fontWeight:"bold"},children:"S.no"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Name"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Email"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Mobile"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Language"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Department"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Role"}),a.jsx(c,{style:{fontWeight:"bold"},children:"State"}),a.jsx(c,{style:{fontWeight:"bold"},children:"District"}),a.jsx(c,{style:{fontWeight:"bold"},children:"City"}),a.jsx(c,{style:{fontWeight:"bold"},children:"Action"})]})}),a.jsx(Q,{children:q.map((o,S)=>a.jsxs(A,{children:[a.jsx(c,{children:S+1}),a.jsx(c,{children:o.emp_name}),a.jsx(c,{children:o.emp_email}),a.jsx(c,{children:o.emp_mobile}),a.jsx(c,{children:o.language_name}),a.jsx(c,{children:o.dept_name}),a.jsx(c,{children:o.role}),a.jsx(c,{children:o.state}),a.jsx(c,{children:o.dist}),a.jsx(c,{children:o.city}),a.jsxs(c,{children:[a.jsx(f,{onClick:()=>G(o.emp_id),children:"Edit"}),a.jsx(f,{onClick:()=>U(o.emp_id),children:"Delete"})]})]},o.emp_id))})]})}),a.jsx(h,{container:!0,spacing:2,display:"flex",justifyContent:"center",className:"mt-4",children:a.jsx(I,{spacing:2,children:a.jsx(ea,{count:Math.ceil(y.length/r),page:p,onChange:(o,S)=>M(S),size:"small",style:{cursor:"pointer","&:hover":{backgroundColor:"transparent"}}})})}),a.jsxs(v,{open:E,onClose:()=>s(!1),maxWidth:"lg",children:[a.jsx(R,{children:a.jsx(ia,{onClose:()=>s(!1)})}),a.jsx(w,{children:a.jsx(f,{onClick:()=>s(!1),children:"Close"})})]}),a.jsxs(v,{open:j,onClose:()=>x(!1),maxWidth:"lg",children:[a.jsx(R,{children:a.jsx(na,{data:t,onClose:()=>x(!1)})}),a.jsx(w,{children:a.jsx(f,{onClick:()=>x(!1),children:"Close"})})]}),a.jsxs(v,{open:T,onClose:()=>{C(!1),_("")},children:[a.jsx(ra,{className:"bg-danger text-center text-white",children:"Error"}),a.jsx(R,{children:a.jsx("h3",{children:N})}),a.jsx(w,{children:a.jsx(f,{onClick:()=>{C(!1),_("")},children:"Ok"})})]}),a.jsxs(v,{open:d,onClose:()=>l(!1),children:[a.jsx(R,{children:a.jsx("p",{children:"Are you sure you want to delete this employee data?"})}),a.jsxs(w,{children:[a.jsx(f,{onClick:H,style:{backgroundColor:"red",color:"white"},children:"Delete"}),a.jsx(f,{onClick:()=>l(!1),style:{backgroundColor:"green",color:"white"},children:"Cancel"})]})]})]})}export{ga as default};
