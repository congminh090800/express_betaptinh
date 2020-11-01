(function radioState(){
	document.getElementById("cong").checked=false;
	document.getElementById("tru").checked=false;
	document.getElementById("nhan").checked=false;
	document.getElementById("chia").checked=false;
})();
function blurFunc(){
	var n1=document.getElementById("n1").value;
	if (isNaN(n1)===true){
		console.log("onblur");
		document.getElementById("notify").innerHTML=
		"Số thứ 1 không phải số thực";
	}
}
function blurFunc2(){
	var n2=document.getElementById("n2").value;
	if (isNaN(n2)===true){
		console.log("onblur");
		document.getElementById("notify").innerHTML=
		"Số thứ 2 không phải số thực";
	}
}

function myFunction(){
	document.getElementById("notify").innerHTML=null;
	console.log("clicked")
	var n1=document.getElementById('n1').value;
	console.log(n1);
	var n2=document.getElementById('n2').value;
	console.log(n2);

	// var result=null;
	// if (document.getElementById("cong").checked){
	// 	result=parseFloat(n1)+parseFloat(n2);
	// }
	// else if (document.getElementById("tru").checked){
	// 	result=parseFloat(n1)-parseFloat(n2);
	// }
	// else if (document.getElementById("nhan").checked){
	// 	result=parseFloat(n1)*parseFloat(n2);
	// }
	// else if (document.getElementById("chia").checked){
	// 	result=parseFloat(n1)/parseFloat(n2);
	// }
	// else{
	// 	document.getElementById("notify").innerHTML="Chưa chọn phép tính";
	// }
}