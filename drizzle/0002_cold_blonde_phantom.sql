CREATE TABLE `pokemon` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`types` text,
	`height` integer NOT NULL,
	`weight` integer NOT NULL,
	`abilities` text,
	`flavor_text` text NOT NULL,
	`hp` integer NOT NULL,
	`atk` integer NOT NULL,
	`def` integer NOT NULL,
	`satk` integer NOT NULL,
	`sdef` integer NOT NULL,
	`spd` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pokemon_name_unique` ON `pokemon` (`name`);