exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("actions")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("actions").insert([
				{
					project_id: 1,
					description: "step 1",
					notes:
						"Melt butter in a medium saucepan over medium-high heat. Cook, gently swirling pan constantly, until particles begin to turn golden brown and butter smells nutty, about 5 minutes. Remove from heat and continue swirling the pan until the butter is a rich brown, about 15 seconds longer. Transfer to a medium bowl, whisk in ice cube, transfer to refrigerator, and allow to cool completely, about 20 minutes, whisking occasionally. (Alternatively, whisk over an ice bath to hasten the process.)",
					completed: true
				},
				{
					project_id: 1,
					description: "step 2",
					notes:
						"Meanwhile, whisk together flour, baking soda, and salt in a large bowl. Place granulated sugar, eggs, and vanilla extract in the bowl of a stand mixer fitted with the whisk attachment. Whisk on medium-high speed until mixture is pale brownish-yellow and falls off the whisk in thick ribbons when lifted, about 5 minutes.",
					completed: false
				},
				{
					project_id: 1,
					description: "step 3",
					notes:
						"Fit paddle attachment onto mixer. When brown butter mixture has cooled (it should be just starting to turn opaque again and firm around the edges), add brown sugar and cooled brown butter to egg mixture in stand mixer. Mix on medium speed to combine, about 15 seconds. Add flour mixture and mix on low speed until just barely combined, with some dry flour still remaining, about 15 seconds. Add chocolate and mix on low speed until dough comes together, about 15 seconds longer. Transfer to an airtight container and refrigerate dough at least overnight and up to 3 days.",
					completed: false
				},
				{
					project_id: 1,
					description: "step 4",
					notes:
						"When ready to bake, adjust oven racks to upper- and lower-middle positions and preheat oven to 325°F. Using a 1-ounce ice cream scoop or a spoon, place scoops of cookie dough onto a nonstick or parchment-lined baking sheet. Each ball should measure approximately 3 tablespoons in volume, and you should be able to fit 6 to 8 balls on each sheet. Tear each ball in half to reveal a rougher surface, then stick them back together with the rough sides facing outward. Transfer to oven and bake until golden brown around edges but still soft, 13 to 16 minutes, rotating pans back to front and top to bottom halfway through baking.",
					completed: false
				},
				{
					project_id: 1,
					description: "step 5",
					notes:
						"Remove baking sheets from oven. While cookies are still hot, sprinkle very lightly with coarse salt and gently press salt down to embed. Let cool for 2 minutes, then transfer cookies to a wire rack to cool completely.",
					completed: false
				},
				{
					project_id: 1,
					description: "step 6",
					notes:
						"Repeat steps 3 through 5 for remaining cookie dough. Allow cookies to cool completely before storing in an airtight container, plastic bag, or cookie jar at room temperature for up to 5 days.",
					completed: false
				},
				{
					project_id: 2,
					description: "step 1",
					notes:
						"Combine flour, salt, yeast, and sugar in the bowl of a stand mixer fitted with a dough hook attachment. Whisk to combine. Add water and knead on low speed just until mixture comes together and no dry flour remains. Allow to rest for 10 minutes. Knead on low speed for an additional ten minutes. The mixture should come together into a cohesive mass that barely sticks to the bottom of the bowl as it kneads. Depending on the type of flour used, you may need to add up to 1/2 cup additional flour. If dough sticks heavily to bottom of bowl, add flour 1 tablespoon at a time with mixer running until it forms a mass that just barely sticks to the bowl. Cover bowl tightly with plastic or transfer the dough to two gallon-sized zipper lock bags, seal, and refrigerate for at least 8 and up to 72 hours.",
					completed: true
				},
				{
					project_id: 2,
					description: "step 2",
					notes:
						"Transfer the dough to a floured work surface and dust the top with additional flour. Using a bench scraper, divide the dough into six even pieces, approximately six ounces each. Using floured hands, shape each piece into a neat ball by gathering the dough towards the bottom. Coat four small containers with non-stick cooking spray or olive oil (large cereal bowls work great for this) and add one dough ball to each bowl. Lightly spray top of dough ball with non-stick cooking spray. Cover tightly with plastic wrap, and allow to rise at room temperature for 2 hours (dough should roughly double in volume).",
					completed: true
				},
				{
					project_id: 2,
					description: "step 3",
					notes:
						"Meanwhile, drain tomatoes in fine meshed strainer and break them up with your fingers, squeezing excess juice out from the interior. Transfer the tomatoes to a blender with a 1/2 teaspoon of kosher salt and blend until smooth. Transfer to a bowl and set aside. Cut the mozzarella into 1/2-inch chunks and place on a plate on a triple layer of paper towels or a clean kitchen towel. Place another triple layer of paper towels or clean dish towel on top of the cheese and stack another plate on top. Allow the excess water to blot out for at least 10 minutes.",
					completed: false
				},
				{
					project_id: 2,
					description: "step 4",
					notes:
						"Transfer 1 ball of dough to a medium bowl filled with flour and flip to coat. Lift it and gently pat off the excess flour. Transfer it to a floured surface and gently stretch it into a 10-inch circle, leaving the outer 1-inch edge slightly thicker than the center. The best way to do this it to start by gently stretching with your fingertips. Pick up the slightly stretched dough and place it on the opened face of your left hand. Toss it back and forth between your opened hands, rotating it slightly with each toss until it stretches out to around 8-inches in diameter. Return it to the work surface. With your left hand flat in the center of the round, use your right hand to stretch the edge of the dough out, rotating as needed until it is an even 10-inches in diameter.",
					completed: false
				},
				{
					project_id: 2,
					description: "step 5",
					notes:
						"Have your tomato sauce, drained cheese, pizza dough, olive oil, kosher salt, and basil leaves ready and close to the stovetop. Preheat the broiler to high and arrange the rack such that you can just barely fit a 12-inch heavy-bottomed oven-proof cast iron or stainless steel skillet on top of it. Dust skillet with flour, tap out excess, then heat the skillet over high heat and heat until lightly smoking, about three minutes. Transfer one dough round to the skillet. It should fill up the entire bottom surface. Working quickly, spread two tablespoons sauce evenly over the dough, leaving the outer 1-inch border un-sauced. Top with 1/6 of the cheese chunks. Season with kosher salt. Drizzle with 1 tablespoon olive oil, and scatter four basil leaves over the surface. Transfer skillet to broiler and broil until pizza is puffed and darkly charred in spots (this can take anywhere between 1 1/2 to 4 minutes, depending on the strength of your broiler). Return the skillet to the stovetop and cook until the bottom is darkly charred in spots, using a thin metal spatula to peek after about 1 minute (depending on the skillet you use, you may skip this step if the pizza is already charred). Transfer the pizza to a cutting board and serve immediately. Repeat steps 4 and 5 to bake remaining pizzas.",
					completed: false
				}
			]);
		});
};
