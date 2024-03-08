CREATE TABLE `pokemon` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`height` integer NOT NULL,
	`weight` integer NOT NULL,
	`flavor_text` text NOT NULL,
	`hp` integer NOT NULL,
	`atk` integer NOT NULL,
	`def` integer NOT NULL,
	`satk` integer NOT NULL,
	`sdef` integer NOT NULL,
	`spd` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pokemon_to_types` (
	`pokemon_id` integer NOT NULL,
	`type_id` integer NOT NULL,
	PRIMARY KEY(`pokemon_id`, `type_id`),
	FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`type_id`) REFERENCES `types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pokemon_name_unique` ON `pokemon` (`name`);