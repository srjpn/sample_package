import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var entries = [
	{
		originId: "ba8d4a15-15d3-47d7-9863-ccf6956a4ff1",
		category: "Tools",
		status: "✅ Use",
		label: "AWS Glue",
		icon: [
			"url",
			"/icon-ba8d4a15-15d3-47d7-9863-ccf6956a4ff1.png"
		],
		id: 1
	},
	{
		originId: "cb7ac52c-801c-4b77-954c-75caca0a7530",
		category: "Tools",
		status: "✅ Use",
		label: "Airflow",
		icon: [
			"url",
			"/icon-cb7ac52c-801c-4b77-954c-75caca0a7530.png"
		],
		id: 2
	},
	{
		originId: "6fa6dbff-6823-4479-9e3a-fa02b051936f",
		category: "Tools",
		status: "✅ Use",
		label: "Athena",
		icon: [
			"data",
			"data:image/png;base64,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"
		],
		id: 3
	},
	{
		originId: "90bbd9f6-5155-4290-bccd-a6c013114c09",
		category: "Tools",
		status: "✅ Use",
		label: "Bitrise",
		icon: [
			"data",
			"data:image/png;base64,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"
		],
		id: 4
	},
	{
		originId: "c864267f-a5d7-40f0-b8cd-bd7ff862003d",
		category: "Platforms",
		status: "✅ Use",
		label: "CDK",
		icon: [
			"url",
			"/icon-c864267f-a5d7-40f0-b8cd-bd7ff862003d.png"
		],
		id: 5
	},
	{
		originId: "b78f871f-a27a-4498-ba0f-acb8d48c5724",
		category: "Platforms",
		status: "✅ Use",
		label: "Cognito",
		icon: [
			"url",
			"/icon-b78f871f-a27a-4498-ba0f-acb8d48c5724.png"
		],
		id: 6
	},
	{
		originId: "78e5befe-1027-4262-ad8d-b3df4692184a",
		category: "Tools",
		status: "✅ Use",
		label: "DataDog",
		icon: [
			"url",
			"/icon-78e5befe-1027-4262-ad8d-b3df4692184a.png"
		],
		id: 7
	},
	{
		originId: "8340ce44-bad1-4e7f-ab5e-47c019573e2c",
		category: "Tools",
		status: "✅ Use",
		label: "DynamoDB",
		icon: [
			"url",
			"/icon-8340ce44-bad1-4e7f-ab5e-47c019573e2c.png"
		],
		id: 8
	},
	{
		originId: "9a42bf41-7dca-46d3-ad1b-82af2e5929ff",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Emotion",
		icon: [
			"url",
			"/icon-9a42bf41-7dca-46d3-ad1b-82af2e5929ff.png"
		],
		id: 9
	},
	{
		originId: "a5d99c5c-5db0-40ce-8fe9-8969cc318d7d",
		category: "Tools",
		status: "✅ Use",
		label: "Firehose",
		icon: [
			"url",
			"/icon-a5d99c5c-5db0-40ce-8fe9-8969cc318d7d.webp"
		],
		id: 10
	},
	{
		originId: "c7b96e3f-fa82-4ffa-81c6-47e69bbd29b3",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Flutter",
		icon: [
			"url",
			"/icon-c7b96e3f-fa82-4ffa-81c6-47e69bbd29b3.svg"
		],
		id: 11
	},
	{
		originId: "5952c86f-29d1-443c-afc7-043ed6f57075",
		category: "Techniques",
		status: "✅ Use",
		label: "GraphQL",
		icon: [
			"url",
			"/icon-5952c86f-29d1-443c-afc7-043ed6f57075.png"
		],
		id: 12
	},
	{
		originId: "4f8bd22b-8681-4adb-b66d-e2b65d1553e9",
		category: "Tools",
		status: "✅ Use",
		label: "Haystack",
		icon: [
			"emoji",
			"📊"
		],
		id: 13
	},
	{
		originId: "80cf8649-5187-4be9-9943-388f87ee4e2a",
		category: "Techniques",
		status: "✅ Use",
		label: "Hexagonal architecture",
		icon: [
			"url",
			"/icon-80cf8649-5187-4be9-9943-388f87ee4e2a.png"
		],
		id: 14
	},
	{
		originId: "b2816c15-e2f7-4019-b94b-ed2a7dd8e375",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Jetpack Compose",
		icon: [
			"url",
			"/icon-b2816c15-e2f7-4019-b94b-ed2a7dd8e375.png"
		],
		id: 15
	},
	{
		originId: "09c760ef-2d12-4f16-9170-06d32dcd3eac",
		category: "Tools",
		status: "✅ Use",
		label: "Kaspresso",
		icon: [
			"none",
			null
		],
		id: 16
	},
	{
		originId: "4879a6b3-7b0b-4d53-bffc-d25d3b00d1fb",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Kotlin",
		icon: [
			"url",
			"/icon-4879a6b3-7b0b-4d53-bffc-d25d3b00d1fb.png"
		],
		id: 17
	},
	{
		originId: "b5a263cf-b9c0-4396-8208-d8333886defb",
		category: "Platforms",
		status: "✅ Use",
		label: "Lambda",
		icon: [
			"url",
			"/icon-b5a263cf-b9c0-4396-8208-d8333886defb.svg"
		],
		id: 18
	},
	{
		originId: "b9b95a41-3f18-4895-937b-002bf061923a",
		category: "Techniques",
		status: "✅ Use",
		label: "Microfrontends",
		icon: [
			"emoji",
			"🌐"
		],
		id: 19
	},
	{
		originId: "b41df950-702d-4156-ae08-30e77c2d333e",
		category: "Techniques",
		status: "✅ Use",
		label: "Native modules",
		icon: [
			"url",
			"/icon-b41df950-702d-4156-ae08-30e77c2d333e.jpg"
		],
		id: 20
	},
	{
		originId: "b32c43ff-f858-4d94-b15e-4aa60adfbb38",
		category: "Tools",
		status: "✅ Use",
		label: "Paparazzi",
		icon: [
			"none",
			null
		],
		id: 21
	},
	{
		originId: "34633681-c0a3-4ae6-a4b0-25bbe56f3213",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Python",
		icon: [
			"url",
			"/icon-34633681-c0a3-4ae6-a4b0-25bbe56f3213.png"
		],
		id: 22
	},
	{
		originId: "72fcfa13-1458-4120-84f9-d5acccf195f2",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "React",
		icon: [
			"url",
			"/icon-72fcfa13-1458-4120-84f9-d5acccf195f2.png"
		],
		id: 23
	},
	{
		originId: "b2ed3677-9c3d-4dac-b522-4fba8ab4235e",
		category: "Tools",
		status: "✅ Use",
		label: "Renovate",
		icon: [
			"url",
			"/icon-b2ed3677-9c3d-4dac-b522-4fba8ab4235e"
		],
		id: 24
	},
	{
		originId: "92b598c7-83b2-4899-825d-35f48ddfcf2a",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "RxJS",
		icon: [
			"url",
			"/icon-92b598c7-83b2-4899-825d-35f48ddfcf2a.png"
		],
		id: 25
	},
	{
		originId: "09344b90-b0f6-4e36-a847-6f2ed21a146c",
		category: "Tools",
		status: "✅ Use",
		label: "SNS + SQS",
		icon: [
			"url",
			"/icon-09344b90-b0f6-4e36-a847-6f2ed21a146c.png"
		],
		id: 26
	},
	{
		originId: "b4da7553-d78b-4167-afdb-dfcdcf75f12a",
		category: "Tools",
		status: "✅ Use",
		label: "Sentry",
		icon: [
			"url",
			"/icon-b4da7553-d78b-4167-afdb-dfcdcf75f12a.png"
		],
		id: 27
	},
	{
		originId: "4460e199-5370-4c20-915f-680110b96346",
		category: "Techniques",
		status: "✅ Use",
		label: "Step Function Local Testing",
		icon: [
			"none",
			null
		],
		id: 28
	},
	{
		originId: "59db2e05-931c-45b0-bd06-56c153c97567",
		category: "Platforms",
		status: "✅ Use",
		label: "Step Functions",
		icon: [
			"url",
			"/icon-59db2e05-931c-45b0-bd06-56c153c97567.png"
		],
		id: 29
	},
	{
		originId: "7451d06a-c303-4532-81fd-76d102fa572e",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Swift",
		icon: [
			"data",
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADUCAMAAABH5lTYAAAAk1BMVEXwUTj+/v7////vQSHwSSz+9PP85+X1m5DvRynwTzXwTDHwSzDvQyTvPx3vQiLwTjP72tbzgHH60s398e/2oZf++fj85OHvPBjyalfwVDv5w731l4vxXEX87Or5yML0kYTxZVD3r6b4ubLzeWnyaVX0hnj3raT2pZvxX0n5zcj4vLXzdWT0i37zgXLycF3wWEDvNgvnSxg0AAAPO0lEQVR4nO2dCZOquhKAQ4hKIBFccN+X0dEZPf//172AqCxBEhLG5b6uunWrzojmozu9ZAXwvySgzEO+X3uWGH9Fa/Taq+68tTljGz1N7OFksf7p7paHds+viLbz3T2Cvkks5NguBs8UjF3bQciyiNnH6/GhJ6NtAdrebkAIsp8LyRVmZBYd/q7qumhry72J3GdjPRJsW+ak29NA296a1kujRoIRHYwUab0TdZ7NISwuAbtCt5VPO/3tv4Na78IU3O2UpG2Q99HrTRDpPnTRObTexHp2y8uJBR71Xz5tt/+C8UZMsHnKN2cebX3/poq9iI1mErQj8728U0YwHQvTbumzW6su1pHvrDK0g7e24qugPbfzpmhr+zeMOzyxXV7ynKT1Jx8Cy3IrZ1pEu/kYWIYLao9pW+jZTdQp9j7jquK0u+azG6hX0PoBrdd/dvN0C+nm0vrDt80Wc4W282jHH9VpL4Jdn0/rfUAKlRW05dPu3zw5zpGkLV9pRx/mj6/iTni0589zURchyyztgTy7VVUJtrO0k09VLav+Vmnab/OZ7XErzc7xME3bsqv8vQJxj2Na5e83Z0na2nNjLVlNj2Z1XcleJ2kPTx6v6HtwhKtL5cxpgnb9TEMGlwTPaNCq8pu7nwpo/adnyE5gbL1BRWHQPcVpvefnUc0lZKX3V0UzT/1ajHb5dN2yBtUD3F414/ZkFqPdvsBolLuA0GC8jSrmZFAjRrt4hUTK2jFahtt29Vuau4nRPjWRuklgywGv/6vfjTj+jXb6GnW8PQhpmXqXVLexmb0brfci9U/zcME1oGdrTgCs0Y1WJZPSOXKHmb1FuDXNs1FXN8Vod+Xdgrvda9QCGke0zJrnWp2J/XujnSsEIGu00ehC+9M77pdOb3J1ykAtS8b29KjP6OzWlZbxznSWRc6NVinc2if4q8/LmV4M19O4MI0aV1qg9A6tMRxr62MsfzfuuHWgDZdOI1pf0c/QEcvm9bQpHP6N4XaALh8YBVwAa6r9jvbgSFc+4A5itCwSTTThNr2IdirY7c55P+yefejpWueaUC5LIzXhknZEWxfrdfa4lfdagnnSKdBTSMXdcqjdoRZcWVpmsLu8EEh2EPonPZHIrKdxdVgN+pKkxWf4TXJ+mQbl8lZLJLonVBHuVMfS/ih1FKcNZgen+5zMiQTrdbpa0h/ip3B7RB1XnhaYS2hs+Z92h6yNcKQj/bFWSVoDttXjeQlaQL3c4jPwVCz9cdR9irtI0RrwoBzPy9Bi1GHlMN/7kkYwrtRZqBcJLBNI43ZVXUIZWmDvfeZ919zfpodwGC03Tom3rJumNeBW8SWWogXoGDz0xR0YpL0Qt6tqdnifpTUWal2kHC2wtmH/5Fkzxp1w2HCWF6dEhWZMmXURNcdckhaQeaBB/8gxWDscE2Yh46yWV6FdhtaA30rhrSwtaIbuCO44vhm1LrjcdyEuWa8ceiqVXK00LaBhQGTWnPUcoWMOh/yVNNHvcJQLBwpdtzxtVKdAv5V9kh4i3JHKBJY14ilXtFjjiQItvmTuEK6y+y360VgL67zlg4Yz59AGqVrpb1SgDSvaC1JmTg5bUQ3DVF96hgNPeLQG/C3t/VRogTOAkcXO087q+iaMvLAsIoTTcYPqr/T7U6IF1u8VaYZSL9y5xKHQkaGSjoV885Vb2pbVaIOFzlELOsfUG4/iUPi3kjMcrPjm0RrwVPL1KdJGcShU7zLlrKybkwlCURlrTo3X3GlLNlaZFvRv1pbZ+Gfu7rizMtaMz3xaAzbKeXplWtDsxVSYdEj0cGstnC5KWDP1c5RrOKU8nzotRrFJKi+5uuuuePa3sbw1Z2vc67eVW22rTnsPNkEr/ORux1hzmTVbstac45SDL1uUSdI00AJnAxNMsViEnem9vcw3S2okMzh1/65S62110IbF/b0dtVZsFM7FsQyBXzI9+mJO0Xf9rkEJ5WqhDYr7uJWNYqmGPYl7GugNZbxpelQ5TtsuUV/poQUk0ayEep2NEcfNG5zlivOTS2vAjbxyNdECMzFmxtTr3NSbsHMjWM4i7Kzy0ovwi2byblkXLaDJLgZr61sXZdl04lWIh177+IC2xAYXbbSALpO4TL3XLmr9JHFhV9BZuQ9oDbiUzlf00d5T5pt6t1eoZLcOshCxIv8xrS/tpzTSBosRUrb2fU2tzFQogUamIuaJvX5Aa8Af2bJeJ20wo5lqDxxHhVHKzoNVqgKxyN4+pJXeYqmVFpjtDK4XFUZpO2eGWKxe/sjU/Stk00e9tMH0X7pFcGeGESdt54GhFy1CRo3HtF+SfkozLc5ol0HVT2GukbHzTA2RbV3O4MX1+bpkyNVMC3Azo90wlQyUSDMVDfuL9cjTcEeU489LmrJuWoBpRruhCw68VRY3WGP+YCaf8+qST3/JjWFop2WuilOUMm+1IBwvFpaInLmVSOi0gLYn55UroOWpMJxSIA7OerGLc84xSGQ8pjUkV2dWQcvxR2HLWG7lcrQbC1MpSazu5NPKraquhDYbbSKq9p7wcMPMmaPegnAbPDiSikHV0II+35lClsn/4+P2NtloYh0KaeV2ulREm02drs2rzf/x7Zy9iLRVNuuFtHJlX1W0gObNarD6J0fxnXUylcTDIlj2kNR+8MpoAe3CPN4V30JZKnmOd8PibisbcaujBeY4B5dpkTtVGUuqQyFck0898S2TPFZIC8hPLm7uMDGM7Z3v58yLJB6QSpWrpAVWKxcrv/lwNryYs/0r8DA0ZEJQpbQAnYqSIS5ANzwKQsSQ2adlnHK1tMDZ5/TQhwCwfjRdjIXeFDxKlEEV0wIbF8ZMLu/34t/jSv72UZncsWpa4FoFVVse7yhvNjP1wa5ECKqclhW8Qv2Pwyv2MZnDDaqnZZFkKe+axV/KSsIp/wXtgzxDA61MFfQntICUCLyitDLJ1N/QAjQQyIvK0bZfjxY4wzKRSIT2BXUbRCJeFf+ptCwSVeKaX9BLXYTOK8B9vQh0Feuk31dJnVzxp7RV+CqpJY9/SwtcsTJOhlZmYOqPacPVKFp54f516luOkFaJCj8fFuocu1gg7WdsoUnBXJYUrc5xKbyf6T9h0bXylqaWoNU65ui04I/2U61AP2+sWZ5W6uikwn7bXMJvoP0IPnKs6cGVGpYS8FLBlOtO+31XDi41gJOBlTtwppgWB1dXdLa6DwzFWkY0oCcVSgQikD0IPuFtdPM2NYQiySM3ReKtFawShrA90HwbFALK1ix55LNQdmGGy/YYr+Z7CJWLQNiR250vlktF60aYPW+p1nSjuVaqimBHbl+QYOZ4208La1/DpsYD/hxbaUgD9qT2awrSYnQduWcf/l7rU7DdP6ppdySz8EK0KojtdGEf7zAF6wC26dFTjENSB5wI10DuOZb9BBFpDJqKLguZLVXWoCkn8WaIV3zJjT3BNE17jszSGraJ1Z3qyJZhTfy+ZYn61j4nc9sw5+juiSW/X9IhaBucvKXOakjtg5Kp5u1JJpVnj04P2yGVIHZR09nOfF2sQSN+RBMqqbELe8I9bwPC+mG+N5tW0R3ermM1zcGubWhEDVogfDuX3EiNbXPHDMOvMHqj7npi0ez97OFl6RahePGz9MLjqTWihr8/E6wNJMelXJSb2obfA2u971X3Z70YIkL7lLL/iHNerOe7UXt6OYdbM+nlt49iCY/sKBzmLj5OM1/E8Gt+8h+qElgXy5flxxzFM/lqCZM/JbYRqsyZf1VM5ygKrAvly2XGk63Kpp7Li9hColKj585ZbHXPH4rYfopycwUuPbyaNQu55bIzI3Src35Dg8BvgZ5beh4IvZg1Cx1lXn7WyzU1z9YpisgSQJU5PrJ5JfXCXjGB0oymS75eSL0CM7mqp2ktei/DKzABpjpb7dLGq6QaAheTqc/NIzB6DfVCozDB0LASATcX6oNpOgSeimZutKy7cGmr/gK8xTFI0yoTh847f8Ebr5azG5cLFwHeaRUvDUNmo2LecGik3j6slrvdcuR1MsDFbgp1I1qVw1yjr7LGlfEGbeytficOJZaFELIskwxbq+TvFV/yai210TLe/rZXwXBFoNPRj0Wt5JAmtq3+uh0/tcwoSi+ia8wA7GhZSeLQ00h0t4cwq39Yk5yFHzYdxOJBYTZ1u2dE9X6gq7gE7Dr6FMwMeGs9On7LpfNb7VkYgm435kBtt8xhRFvfWhTMGua1+kVDMOh8XVtXuJzodveT1OrIIrEJGHuqI47s8dFA5Crr2yB34U1sff9Kq/eKbozMc1cBOPDBDUvwEgDcv0zwF+kWRxfNs//J7IcTawMywfy7VoKYPVFfbqhEgy6nhhQdA3i93ZjRyqzPFxXsEGuw8yRmCsJPel8DIncvHcY1yJxVge9xfm60VV3k7KImPTVmdaOAOfpzb7Ulpvz1YM4JFmcXaHejrWm7Xy4rLiIUnOar68wXV6beobF2qfTRtBcJhlGKtn3F7khVvH6wULDrWCxJOJ/mu9Wo7dWn006nM+31vPZo9dVYT2wSTACX/36zXjhfEIXbkPb3T66bZ9AsyyVNk4Zims0w8xVfO5En7qZwYXZzeqeVPJnq5cQtcrN4CO+0cotf31DsVozWf4Eb2CuVqN670CrdgPsOQntxWpWbq99ArnljRFv77I4bDdNcaT/clG+GHNGWOif+XeRaEtxoS5w2/T7SnKVpV/pu2n41wROYptU3XPNyQkZZ2o9VLsYwS/uxPdec8WjL3PDwBmIfIY9WfGXzWwmt82l99Urz9cTqQj4t/K5wxOZJYm9gHi0cf1xxYE3zaeHgwwrd/gg+oPWB5p22zxXzCz6ihVP9xz48T8g8DZui1XKT/YsI+cnApmkZ7ocYc3AAXyEtrA8/obLH/Uyf5dLC2uL9kyrbavNgObQQylw39pJCBjUuLJcWHprv3HndbOR5SAuni7f1zThcSyxFy6p79J69F+FVLms+LazN++/Hi4JF02VoIeyMyXulVsgcdx6xPqRl+t3ht0k2sIXG00cwhbQQGqO93jNMqhGM6Hn10IaFaGGwemnSLLkk4m/EReaw4RWjCtEyqa9aDrXk17tULi6yTPP4JYYqShtIb9U4OqTZJBYKtse7zzNvjN1wCQdryma88gQMWJ42lFqvPVt9NX5ax80EW88Q5LhgsjluG8uRV+iUFGnj4teeIr4vo0xttO8o/6f9XPkf/7H8/ExboyAAAAAASUVORK5CYII="
		],
		id: 30
	},
	{
		originId: "e9c2bfb4-9568-4eac-9873-2bff4ff88e2f",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "SwiftUI",
		icon: [
			"data",
			"data:image/jpeg;base64,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"
		],
		id: 31
	},
	{
		originId: "8226c143-739a-4897-825f-8a1a5c1182e4",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "Theme UI",
		icon: [
			"emoji",
			"🎢"
		],
		id: 32
	},
	{
		originId: "e5e59672-a9eb-4723-b3d3-27b99740f4e9",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "TypeScript",
		icon: [
			"url",
			"/icon-e5e59672-a9eb-4723-b3d3-27b99740f4e9.png"
		],
		id: 33
	},
	{
		originId: "55386818-be1f-4fb3-a3af-8f63849be464",
		category: "Platforms",
		status: "✅ Use",
		label: "WAF",
		icon: [
			"url",
			"/icon-55386818-be1f-4fb3-a3af-8f63849be464.svg"
		],
		id: 34
	},
	{
		originId: "a6ac7ca0-bcf0-419c-bc19-517918a0a4d8",
		category: "Tools",
		status: "✅ Use",
		label: "esbuild",
		icon: [
			"url",
			"/icon-a6ac7ca0-bcf0-419c-bc19-517918a0a4d8.png"
		],
		id: 35
	},
	{
		originId: "92021011-3a6b-45ed-8c7e-a112b692563d",
		category: "Tools",
		status: "✅ Use",
		label: "nx",
		icon: [
			"url",
			"/icon-92021011-3a6b-45ed-8c7e-a112b692563d.webp"
		],
		id: 36
	},
	{
		originId: "d55016fb-b09a-422d-9055-2e4199ce8b0d",
		category: "Languages & Frameworks",
		status: "✅ Use",
		label: "single-spa",
		icon: [
			"url",
			"/icon-d55016fb-b09a-422d-9055-2e4199ce8b0d.svg"
		],
		id: 37
	},
	{
		originId: "64768b1a-0bbe-4f9c-aac7-a615dd002467",
		category: "Languages & Frameworks",
		status: "🚧 Try",
		label: "AWS Lambda powertools",
		icon: [
			"url",
			"/icon-64768b1a-0bbe-4f9c-aac7-a615dd002467.png"
		],
		id: 38
	},
	{
		originId: "c5e84384-bfee-4062-9c8b-3a9936d012b4",
		category: "Tools",
		status: "🚧 Try",
		label: "Apollo Studio",
		icon: [
			"url",
			"/icon-c5e84384-bfee-4062-9c8b-3a9936d012b4.png"
		],
		id: 39
	},
	{
		originId: "acd0f4db-35bf-456c-ab09-05cbad0e44c0",
		category: "Tools",
		status: "🚧 Try",
		label: "Buildjet",
		icon: [
			"none",
			null
		],
		id: 40
	},
	{
		originId: "ca6ad607-7a72-4043-ac05-df9b8e89dc1b",
		category: "Tools",
		status: "🚧 Try",
		label: "Burpsuite community edition",
		icon: [
			"none",
			null
		],
		id: 41
	},
	{
		originId: "b089fd26-3671-4526-b941-2b25f0ec9099",
		category: "Tools",
		status: "🚧 Try",
		label: "Code Stream",
		icon: [
			"url",
			"/icon-b089fd26-3671-4526-b941-2b25f0ec9099.jpeg"
		],
		id: 42
	},
	{
		originId: "6ced348c-4eee-4133-b06b-7e16c38cbaa6",
		category: "Techniques",
		status: "🚧 Try",
		label: "Contract Testing",
		icon: [
			"none",
			null
		],
		id: 43
	},
	{
		originId: "9751ac6d-d5bf-44b6-8ecd-962aebb0c424",
		category: "Tools",
		status: "🚧 Try",
		label: "Cypress Component Testing",
		icon: [
			"emoji",
			"🌲"
		],
		id: 44
	},
	{
		originId: "1d5588f9-4344-4600-af15-8a196135b0be",
		category: "Tools",
		status: "🚧 Try",
		label: "DoubleLoop",
		icon: [
			"url",
			"/icon-1d5588f9-4344-4600-af15-8a196135b0be.webp"
		],
		id: 45
	},
	{
		originId: "25259a98-c8f4-45cf-adf2-6b7f8440f761",
		category: "Tools",
		status: "🚧 Try",
		label: "Elasticache",
		icon: [
			"none",
			null
		],
		id: 46
	},
	{
		originId: "e8490d3e-0322-4fb2-966e-3349b575bb14",
		category: "Tools",
		status: "🚧 Try",
		label: "Event Bridge",
		icon: [
			"url",
			"/icon-e8490d3e-0322-4fb2-966e-3349b575bb14.png"
		],
		id: 47
	},
	{
		originId: "ee36f6b9-210b-40e5-916c-b796cf04bb06",
		category: "Tools",
		status: "🚧 Try",
		label: "GitHub CoPilot",
		icon: [
			"none",
			null
		],
		id: 48
	},
	{
		originId: "df90671a-6a6c-4ba6-bdab-521693a15214",
		category: "Techniques",
		status: "🚧 Try",
		label: "GraphQL Federation",
		icon: [
			"url",
			"/icon-df90671a-6a6c-4ba6-bdab-521693a15214.png"
		],
		id: 49
	},
	{
		originId: "af07ea63-4b90-4c03-b8dc-4769341a0754",
		category: "Tools",
		status: "🚧 Try",
		label: "Hydra",
		icon: [
			"url",
			"/icon-af07ea63-4b90-4c03-b8dc-4769341a0754.svg"
		],
		id: 50
	},
	{
		originId: "2eb11bda-8abf-41b0-bc78-c248caa483ab",
		category: "Platforms",
		status: "🚧 Try",
		label: "K8s",
		icon: [
			"url",
			"/icon-2eb11bda-8abf-41b0-bc78-c248caa483ab.png"
		],
		id: 51
	},
	{
		originId: "00d7774e-cd04-4ba3-af81-750d3200a5fe",
		category: "Tools",
		status: "🚧 Try",
		label: "Linear",
		icon: [
			"url",
			"/icon-00d7774e-cd04-4ba3-af81-750d3200a5fe.png"
		],
		id: 52
	},
	{
		originId: "4e8dc759-e9d2-4a3f-9468-8a455b388f94",
		category: "Techniques",
		status: "🚧 Try",
		label: "Monorepo",
		icon: [
			"url",
			"/icon-4e8dc759-e9d2-4a3f-9468-8a455b388f94.svg"
		],
		id: 53
	},
	{
		originId: "44eeddcf-1771-4300-9e67-ade3357f2353",
		category: "Languages & Frameworks",
		status: "🚧 Try",
		label: "Nest.Js",
		icon: [
			"url",
			"/icon-44eeddcf-1771-4300-9e67-ade3357f2353.png"
		],
		id: 54
	},
	{
		originId: "f429fe83-b1c8-4d4a-b43d-db11c57a23b4",
		category: "Tools",
		status: "🚧 Try",
		label: "OpsLevel",
		icon: [
			"url",
			"/icon-f429fe83-b1c8-4d4a-b43d-db11c57a23b4.jpeg"
		],
		id: 55
	},
	{
		originId: "144643a6-2f4b-4fcb-a992-1f5fc89cd583",
		category: "Tools",
		status: "🚧 Try",
		label: "Opsgenie",
		icon: [
			"url",
			"/icon-144643a6-2f4b-4fcb-a992-1f5fc89cd583.png"
		],
		id: 56
	},
	{
		originId: "e6c99b3c-5b87-466f-8782-f52075d2a1ed",
		category: "Tools",
		status: "🚧 Try",
		label: "Pact.js ",
		icon: [
			"none",
			null
		],
		id: 57
	},
	{
		originId: "9b731d7f-aba5-4eff-9797-358d0730b2d0",
		category: "Tools",
		status: "🚧 Try",
		label: "PostgreSQL",
		icon: [
			"url",
			"/icon-9b731d7f-aba5-4eff-9797-358d0730b2d0.png"
		],
		id: 58
	},
	{
		originId: "964deb20-a5e6-4ea0-bc2e-d2461c880eec",
		category: "Tools",
		status: "🚧 Try",
		label: "Postman",
		icon: [
			"none",
			null
		],
		id: 59
	},
	{
		originId: "155d6d64-fbc4-4b35-a232-3c7e2c136d93",
		category: "Platforms",
		status: "🚧 Try",
		label: "SST",
		icon: [
			"url",
			"/icon-155d6d64-fbc4-4b35-a232-3c7e2c136d93.svg"
		],
		id: 60
	},
	{
		originId: "cbbd4d15-93a7-494c-9e31-4f8d0dcc8c7c",
		category: "Tools",
		status: "🚧 Try",
		label: "Tuist",
		icon: [
			"data",
			"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjgwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0zOS42NjY3IDExNS42MUMzOS42NjY3IDExNS42MSA1Ni41IDEyOSA4MC41IDEyOUMxMDQuNSAxMjkgMTIxLjMzMyAxMTUuNjEgMTIxLjMzMyAxMTUuNjFNMzUgOTIuODc4QzM1IDkyLjg3OCA2NC4xNjY3IDEyOCA4MC41IDEyOE04MC41IDEyOEM5Ni44MzMzIDEyOCAxMjYgOTIuODc4IDEyNiA5Mi44NzhNODAuNSAxMjhDNjQuMTY2NyAxMjggMzUgNjQuNzgwNSAzNSA2NC43ODA1TTgwLjUgMTI4Qzk2LjgzMzMgMTI4IDEyNiA2NC43ODA1IDEyNiA2NC43ODA1TTgwLjUgMTI4QzcyLjAwMDEgMTI4IDUzLjY2NjcgNDAuMTk1MSA1My42NjY3IDQwLjE5NTFNODAuNSAxMjhDODguOTk5OSAxMjggMTA3LjMzMyA0MC4xOTUxIDEwNy4zMzMgNDAuMTk1MU04MC44MzMzIDEyOEw4MC44MzMzIDMyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjgwIiB5MT0iMCIgeDI9IjgwIiB5Mj0iMTYwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2MjM2RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzAwMERBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
		],
		id: 61
	},
	{
		originId: "0177c619-8815-4862-8650-44f2f8567b6f",
		category: "Techniques",
		status: "🚫 Hold",
		label: "AppCheck",
		icon: [
			"url",
			"/icon-0177c619-8815-4862-8650-44f2f8567b6f.png"
		],
		id: 62
	},
	{
		originId: "f5ee1afb-576a-4fdd-90b0-6344be2224a6",
		category: "Platforms",
		status: "🚫 Hold",
		label: "CloudFormation",
		icon: [
			"url",
			"/icon-f5ee1afb-576a-4fdd-90b0-6344be2224a6.svg"
		],
		id: 63
	},
	{
		originId: "0e232578-9195-41b9-9ff9-ecbe796a298a",
		category: "Tools",
		status: "🚫 Hold",
		label: "Epsagon",
		icon: [
			"url",
			"/icon-0e232578-9195-41b9-9ff9-ecbe796a298a.webp"
		],
		id: 64
	},
	{
		originId: "8499eb11-b5bb-4fc0-bbd0-a4d7cd978b23",
		category: "Tools",
		status: "🚫 Hold",
		label: "Kibana",
		icon: [
			"url",
			"/icon-8499eb11-b5bb-4fc0-bbd0-a4d7cd978b23.png"
		],
		id: 65
	},
	{
		originId: "f042362a-1201-4333-8144-4e0015d79e2c",
		category: "Languages & Frameworks",
		status: "🤔 Reconsider",
		label: "AWS SAM",
		icon: [
			"none",
			null
		],
		id: 66
	},
	{
		originId: "8d1c6f89-b912-45f9-ae6f-6ec526cc2130",
		category: "Platforms",
		status: "🤔 Reconsider",
		label: "AppSync",
		icon: [
			"url",
			"/icon-8d1c6f89-b912-45f9-ae6f-6ec526cc2130.jpeg"
		],
		id: 67
	},
	{
		originId: "2f4791c3-2fef-4d9d-a8c6-ec1c8dedfd6c",
		category: "Tools",
		status: "🤔 Reconsider",
		label: "HackerOne",
		icon: [
			"url",
			"/icon-2f4791c3-2fef-4d9d-a8c6-ec1c8dedfd6c.png"
		],
		id: 68
	},
	{
		originId: "d3bff305-ab7f-485f-9302-a06a8375a050",
		category: "Tools",
		status: "🤔 Reconsider",
		label: "PagerDuty",
		icon: [
			"url",
			"/icon-d3bff305-ab7f-485f-9302-a06a8375a050.png"
		],
		id: 69
	},
	{
		originId: "6802bd6e-5e31-4b99-8474-a967597a9359",
		category: "Tools",
		status: "🤔 Reconsider",
		label: "Xcode Cloud",
		icon: [
			"url",
			"/icon-6802bd6e-5e31-4b99-8474-a967597a9359.png"
		],
		id: 70
	}
];

var categories = [
    "Tools",
    "Languages & Frameworks",
    "Platforms",
    "Techniques",
];
var status = ["✅ Use", "🚧 Try", "🤔 Reconsider", "🚫 Hold"];

var rings = [
    { radius: 200 },
    { radius: 260 },
    { radius: 320 },
    { radius: 380 },
];

function polar(cartesian) {
    var x = cartesian.x, y = cartesian.y;
    return {
        t: Math.atan2(y, x),
        r: Math.sqrt(x * x + y * y),
    };
}
function cartesian(polar) {
    return {
        x: polar.r * Math.cos(polar.t),
        y: polar.r * Math.sin(polar.t),
    };
}
function bounded(value, min, max) {
    var low = Math.min(min, max);
    var high = Math.max(min, max);
    return Math.min(Math.max(value, low), high);
}
function boundedRing(polar, rMin, rMax) {
    return {
        t: polar.t,
        r: bounded(polar.r, rMin, rMax),
    };
}
function boundedBox(point, min, max) {
    return {
        x: bounded(point.x, min.x, max.x),
        y: bounded(point.y, min.y, max.y),
    };
}

var margin = 20;
var Blip = /** @class */ (function () {
    function Blip(entry) {
        this.entry = entry;
        this.x = 0;
        this.y = 0;
        var quadrant = categories.indexOf(entry.category);
        var ring = status.indexOf(entry.status);
        this.polarMin = {
            t: quadrants[quadrant].radialMin * Math.PI,
            r: ring === 0 ? 30 : rings[ring - 1].radius,
        };
        this.polarMax = {
            t: quadrants[quadrant].radialMax * Math.PI,
            r: rings[ring].radius,
        };
        this.cartesianMin = {
            x: margin * quadrants[quadrant].factorX,
            y: margin * quadrants[quadrant].factorY,
        };
        this.cartesianMax = {
            x: rings[3].radius * quadrants[quadrant].factorX,
            y: rings[3].radius * quadrants[quadrant].factorY,
        };
        var init = cartesian({
            t: randomBetween(this.polarMin.t, this.polarMax.t),
            r: normalBetween(this.polarMin.r, this.polarMax.r),
        });
        this.position(init);
        this.clip();
    }
    Blip.prototype.position = function (point) {
        this.x = point.x;
        this.y = point.y;
    };
    Blip.prototype.translate = function () {
        return "translate(".concat(this.x, "px, ").concat(this.y, "px)");
    };
    Blip.prototype.update = function (d) {
        this.clip();
        return this;
    };
    Blip.prototype.clip = function () {
        var box = boundedBox(this, this.cartesianMin, this.cartesianMax);
        var point = boundedRing(polar(box), this.polarMin.r + margin, this.polarMax.r - margin);
        this.position(cartesian(point));
    };
    Object.defineProperty(Blip.prototype, "label", {
        get: function () {
            return this.entry.label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "originId", {
        get: function () {
            return this.entry.originId;
        },
        enumerable: false,
        configurable: true
    });
    Blip.prototype.isSelected = function (selected) {
        return this.originId === selected;
    };
    Object.defineProperty(Blip.prototype, "id", {
        get: function () {
            return this.entry.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "icon", {
        get: function () {
            return this.entry.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "status", {
        get: function () {
            return this.entry.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "category", {
        get: function () {
            return this.entry.category;
        },
        enumerable: false,
        configurable: true
    });
    return Blip;
}());
// Plato's number
var seed = 5040;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
function randomBetween(min, max) {
    return min + random() * (max - min);
}
function normalBetween(min, max) {
    return min + (random() + random()) * 0.5 * (max - min);
}
var quadrants = [
    { radialMin: 0, radialMax: 0.5, factorX: 1, factorY: 1 },
    { radialMin: 0.5, radialMax: 1, factorX: -1, factorY: 1 },
    { radialMin: -1, radialMax: -0.5, factorX: -1, factorY: -1 },
    { radialMin: -0.5, radialMax: 0, factorX: 1, factorY: -1 },
];

var blips = entries.map(function (entry) { return new Blip(entry); });

function Categories(_a) {
    var selected = _a.selected, setSelected = _a.setSelected;
    return (jsx(Fragment, { children: Object.entries(categoryEntries).map(function (_a) {
            var category = _a[0], entries = _a[1];
            return (jsxs("div", { className: "category ".concat(getCategoryId(category)), children: [jsx("h3", { children: category }), jsx("ul", { children: entries.map(function (entry) {
                            return (jsx("li", { onMouseOver: function () { return setSelected(entry.originId); }, className: selected === entry.originId ? "selected" : "", children: entry.label }, entry.id));
                        }) })] }, category));
        }) }));
}
function getCategoryId(category) {
    var categoryMap = {
        Tools: "tools",
        "Languages & Frameworks": "languages-frameworks",
        Techniques: "techniques",
        Platforms: "platforms",
    };
    return categoryMap[category];
}
var byCategory = function (category) {
    return blips.filter(function (entry) { return entry.category === category; });
};
var categoryEntries = {
    Tools: byCategory("Tools"),
    "Languages & Frameworks": byCategory("Languages & Frameworks"),
    Techniques: byCategory("Techniques"),
    Platforms: byCategory("Platforms"),
};

var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function tree_add(d) {
  const x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

function tree_cover(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

function tree_data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}

function tree_extent(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

function Quad(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

function tree_find(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new Quad(node[3], xm, ym, x2, y2),
        new Quad(node[2], x1, ym, xm, y2),
        new Quad(node[1], xm, y1, x2, ym),
        new Quad(node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}

function tree_remove(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

function tree_root() {
  return this._root;
}

function tree_size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}

function tree_visit(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
    }
  }
  return this;
}

function tree_visitAfter(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

function defaultX(d) {
  return d[0];
}

function tree_x(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

function defaultY(d) {
  return d[1];
}

function tree_y(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;

function constant(x) {
  return function() {
    return x;
  };
}

function jiggle(random) {
  return (random() - 0.5) * 1e-6;
}

function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

function collide(radius) {
  var nodes,
      radii,
      random,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = jiggle(random), l += x * x;
            if (y === 0) y = jiggle(random), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
  };

  return force;
}

// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

function lcg() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

function simulation(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = timer(step),
      event = dispatch("tick", "end"),
      random = lcg();

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i, n = nodes.length, node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function(force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

Transform.prototype;

function Icon(_a) {
    var blip = _a.blip, tooltip = _a.tooltip;
    var _b = blip.icon, type = _b[0], str = _b[1];
    switch (type) {
        case "none":
            return jsx(Fragment, {});
        case "emoji":
            return jsx("div", { className: "icon emoji ".concat(tooltip && "in"), children: str });
        case "data":
        case "url":
            return (jsx("div", { className: "icon image ".concat(tooltip && "in"), children: jsx("div", { style: {
                        backgroundImage: "url(".concat(str, ")"),
                    } }) }));
    }
}

function Tooltip(_a) {
    var blip = _a.blip;
    return (jsxs("div", { className: "tooltip", children: [jsxs("div", { className: "tooltip-title", children: [jsx(Icon, { tooltip: true, blip: blip }), jsx("b", { children: blip.label })] }), jsx("div", { className: "tooltip-statusWrapper", children: jsx("span", { className: "tooltip-status", children: blip.status }) }), jsx("div", { className: "tooltip-category", children: blip.category })] }));
}

function Blips(_a) {
    var selected = _a.selected, setSelected = _a.setSelected, entries = _a.entries;
    var animatedBlips = useAnimatedBlips(entries);
    return (jsx("div", { className: "blips", children: animatedBlips.map(function (blip, i) {
            return (jsx("div", { className: "blip ".concat(getStatusId(blip.status), " ").concat(selected === blip.originId ? "selected" : ""), onMouseOver: function () { return setSelected(blip.originId); }, style: { transform: blip.translate() }, children: blip.isSelected(selected) ? (jsx(Tooltip, { blip: blip })) : (jsx(Icon, { blip: blip })) }, blip.label));
        }) }));
}
function useAnimatedBlips(entries) {
    var _a = useState([]), animatedNodes = _a[0], setAnimatedNodes = _a[1];
    useEffect(function () {
        var simulation$1 = simulation()
            .velocityDecay(0.029)
            .force("collision", collide().radius(16).strength(0.15))
            .on("tick", function () {
            var newNodes = simulation$1.nodes();
            var newBlips = entries.map(function (blip, i) { return blip.update(newNodes[i]); });
            setAnimatedNodes(newBlips);
        })
            .nodes(entries);
        return function () {
            simulation$1.stop();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return animatedNodes;
}
function getStatusId(status) {
    var statusMap = {
        "🚫 Hold": "hold",
        "🚧 Try": "try",
        "🤔 Reconsider": "reconsider",
        "✅ Use": "use",
    };
    return statusMap[status];
}

var height = 810;
function SVGGrid() {
    var width = (1400);
    return (jsx("svg", { width: width, height: height, style: { backgroundColor: "white" }, children: jsxs("g", { style: { backgroundColor: "green" }, transform: "translate(".concat(width / 2, ", ").concat(height / 2, ")"), children: [jsx("line", { x1: 0, y1: -380, x2: 0, y2: 380, stroke: "#f2f2ff", strokeWidth: 2 }), jsx("line", { x1: -width / 2, y1: 0, x2: width / 2, y2: 0, stroke: "#f2f2ff", strokeWidth: 2 }), status.map(function (status, i) {
                    return (jsx("g", { children: jsx("circle", { cx: 0, cy: 0, r: rings[i].radius, fill: "none", stroke: "#dde", strokeWidth: 4 }) }, status));
                })] }) }));
}

function Radar(_a) {
    var entries = _a.entries;
    var _b = useState(), selected = _b[0], setSelected = _b[1];
    var blips = entries.map(function (entry) { return new Blip(entry); });
    return (jsxs("div", { className: "radar", children: [jsx(Categories, { selected: selected, setSelected: setSelected }), jsx(Blips, { selected: selected, setSelected: setSelected, entries: blips }), jsx(SVGGrid, {})] }));
}

export { Radar };
//# sourceMappingURL=index.esm.js.map
