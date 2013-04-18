var preload_data = [
    {item: 'Complete the application for graduation'},
    {item: 'Tell your guests'},
    {item: 'Stay up to date'},
    {item: 'Apply for class speaker and other awards'},
    {item: 'Make accommodations for guests with disabilities'},
    {item: 'Attend Countdown to Commencement'},
    {item: 'View the Official Commencement List'},
    {item: 'Purchase your cap and gown'},
    {item: 'Attend Commencement May 11th, 2013'}
];

migration.up = function(migrator) {
	migrator.createTable({
		"columns": {
			"item":"text",
			"done":"integer",
			"date_completed":"text"
		}
	});
    for (var i = 0; i < preload_data.length; i++) {
        migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
	migrator.dropTable("todo");
};
