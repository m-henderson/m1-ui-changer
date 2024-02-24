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
				
				var number1 = Number(dividends.replace(/[^0-9.-]+/g,""));
				var number2 = Number(capGains.replace(/[^0-9.-]+/g,""));
				let USDollar = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				});

				var total = number1 + number2;
				
				const root = document.createElement("div");
				root.innerHTML = `
				<div class="container">
					<div class="column">
						<div class="item">
							<p class="label">Current Value</p>
							<div class="totalValue">${totalValue}</div>
						</div>
					</div> 
				
					<div class="column">
						<div class="item">
							<p>All-time gain</p>
							<div class="allTimeGain">+ ${USDollar.format(total)}</div>
						</div>
					</div>
				
					<div class="column">
						<div class="item">
							<p>All-time return</p>
							<div class="allTimeReturn">
							<span>▲</span>115.15%
							</div>
						</div>
					</div>
			  	</div>
				`
				
				item.appendChild(root);
				
		
				
				const para = document.createElement("h1");
				para.className = "extensionClass";
				
				item.appendChild(para);
				
				const gain = document.createElement("h2");
				gain.className = "extensionClassTwo";
				
				const percent = document.createElement("h2");
				percent.className = "extensionClassThree";
				
		
			}

		
		}
		
		
		
		console.log(dividends);
		console.log(capGains);

    } else {
        console.log("Did not find it.");

    }
 }, 1000);
