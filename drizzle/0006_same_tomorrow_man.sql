CREATE TABLE `abilities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `abilities_name_unique` ON `abilities` (`name`);