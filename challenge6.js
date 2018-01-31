// recursion

[
	{
		"total": 10,
		"moreData": [
			{
				"total": 10
			}
		]
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10,
				"moreData": [
					{
						"total": 10,
						"moreData": [
							{
								"total": 10
							}
						]
					}
				]
			}
		]
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10,
				"moreData": [
					{
						"total": 10,
						"moreData": [
							{
								"total": 10,
								"moreData": [
									{
										"total": 10,
										"moreData": [
											{
												"total": 10,
												"moreData": [
													{
														"total": 10,
														"moreData": [
															{
																"total": 10
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10,
				"moreData": [
					{
						"total": 10,
						"moreData": [
							{
								"total": 10,
								"moreData": [
									{
										"total": 10,
										"moreData": [
											{
												"total": 10,
												"moreData": [
													{
														"total": 10,
														"moreData": [
															{
																"total": 10,
																"moreData": [
																	{
																		"total": 10,
																		"moreData": [
																			{
																				"total": 10,
																				"moreData": [
																					{
																						"total": 10
																					},
																					{
																						"total": 10
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																"total": 10,
																"moreData": [
																	{
																		"total": 10,
																		"moreData": [
																			{
																				"total": 10,
																				"moreData": [
																					{
																						"total": 10
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10
			}
		]
	},
	{
		"total": 10
	},
	{
		"total": 10
	},
	{
		"total": 10
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10,
				"moreData": [
					{
						"total": 10
					}
				]
			}
		]
	},
	{
		"total": 10,
		"moreData": [
			{
				"total": 10
			}
		]
	}
];



let fs = require('fs');

let data = JSON.parse(fs.readFileSync('recursionData.json', 'utf8'));

let sum = 0;
function sumValues(obj) {
	for (let key in obj) {
		if (typeof obj [key] === "object") {
			sunValues(obj[key]);
		}
		else {
			sum += obj[key];
		}
	}
	return sum;
}

console.log("sum of data: " + sumValues(data));