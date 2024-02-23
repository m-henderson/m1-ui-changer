const interval = setInterval(function() {
   var content = document.body.innerHTML || document.body.innerHTML;
    var hasText = content.indexOf("PortfolioSliceValueHistoryChart___StyledBox-sc-bb265619-0")!==-1;
    if (hasText) {
		console.log("Found it");
		var elements = document.getElementsByClassName('PortfolioSliceValueHistoryChart___StyledBox-sc-bb265619-0');
		console.log(elements);
		
		let i = 0;
		for (let item of elements) {
			i++;
			if (i == 2){
				var dividends = item.innerHTML;
			}
			if (i == 4){
				var capGains = item.innerHTML;
			}
			if (i == 3){
				var totalValue = item.innerHTML;
			}
	
			console.log(i);
			console.log(item.innerHTML);
		}
		
		var percentGain = document.getElementsByClassName("percent-gain-amount");
		console.log(percentGain);
		console.log(percentGain.innerHTML);
		
		var elements = document.getElementsByClassName('clGawI');
		
		var mewClass = document.getElementsByClassName('extensionClass');
	
		for (let item of elements) {
			

			if (dividends !== "$--" && mewClass.length < 1){
				
				
				
				const empty = document.createElement("div");
				empty.className = "emptyDiv";
				item.appendChild(empty);
				
				const label = document.createElement("span");
				label.className = "labelDiv";
				label.innerText = "Total Value";
				item.appendChild(label);
				
				const labe2 = document.createElement("span");
				labe2.className = "labelDiv2";
				labe2.innerText = "All-time Return";
				item.appendChild(labe2);
				
				const empty2 = document.createElement("div");
				item.appendChild(empty2);
				
				const para = document.createElement("h1");
				para.className = "extensionClass";
				para.innerText = totalValue;
				item.appendChild(para);
				
				const gain = document.createElement("h2");
				gain.className = "extensionClassTwo";
				
				const percent = document.createElement("h2");
				percent.className = "extensionClassThree";
				
				
				var number1 = Number(dividends.replace(/[^0-9.-]+/g,""));
				var number2 = Number(capGains.replace(/[^0-9.-]+/g,""));
				var total = number1 + number2;
				
				
				let USDollar = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				});

				
				gain.innerText = '+' + USDollar.format(total);
				item.appendChild(gain);
				item.appendChild(percent);
		
			}

		
		}
		
		
		
		console.log(dividends);
		console.log(capGains);

    } else {
        console.log("Did not find it.");

    }
 }, 10000);
