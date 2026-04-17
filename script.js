let textEl=document.querySelector("#text");
let delayEl=document.querySelector("#delay");
let buttonEl=document.querySelector("#btn");
let divEl=document.querySelector("#output");
buttonEl.addEventListener("click",()=>
	{
		let text=textEl.value;
		let delay=Number(delayEl.value);
    showText(text,delay)
	})

async function showText(text,delay)
{
	let data=await new Promise((resolve,reject)=>
		{
			setTimeout(()=>
				{
        
					resolve(text)
				},delay)
		})
  divEl.textContent=data;
}