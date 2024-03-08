DROP TABLE `abilities`;--> statement-breakpoint
DROP TABLE `pokemon`;--> statement-breakpoint
ALTER TABLE `types` RENAME COLUMN `type` TO `name`;--> statement-breakpoint
DROP INDEX IF EXISTS `types_type_unique`;--> statement-breakpoint
ALTER TABLE types ADD `id` integer PRIMARY KEY NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `types_name_unique` ON `types` (`name`);