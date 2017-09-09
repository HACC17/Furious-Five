//This is gridster javascript for the schedule grid

gridster.add_widget("<li>", [1], [1] );

gridster.remove_widget( $('.gridster li').eq(3) );

gridster.widget_selector("li");

gridster.widget_margins(10, 10);

gridster.widget_base_dimensions(150, 150);

gridster.extra_rows("true");

gridster.extra_cols("true");

gridster.autogenerate_stylesheet("true");

gridster.avoid_overlapped_widgets("true");

gridster.draggable.start(function () {
	console.log("HALLO");
});

gridster

