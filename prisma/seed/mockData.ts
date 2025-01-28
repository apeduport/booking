import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('60106cb2-e9b0-4cb6-bd91-92328371e326', '1Cristobal1@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1122334455', '3344556677');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('7e578679-e2b2-4697-97aa-8ab26672bbd2', '21Kay_Hessel56@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=23', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '5566778899', '3344556677');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('e2f9729d-de29-4d6b-b8df-985bdce04421', '31Augusta_Stoltenberg@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=33', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1122334455', '0987654321');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('834295bb-f39b-4213-80cd-15cd7df11479', '41Kyla87@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1122334455', '1234567890');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('a13d2700-82ab-4c65-9a9c-42f8c393a664', '51Lois_Nienow@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=53', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '6677889900', '1234567890');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('8c68c925-f18b-41c6-8cb3-c7d440fffe85', '61Fred_Brakus20@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=63', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '6677889900', '2233445566');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('62fb8dc2-b2e1-45cd-bd96-e4bc624501a7', '71Afton_Feest@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=73', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', '3344556677');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('1ebf1a6a-4d3b-4fee-bfbf-05d55d94179b', '81Ricardo_Durgan-Corkery@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=83', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', '0987654321');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password", "phone", "alternateNumber") VALUES ('3666777e-31e7-464a-8751-0d2aa64384bf', '91Christian30@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=93', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', '0987654321');

INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('690edcf2-9cfc-4b26-bad1-c47d569ffd1a', 'Advanced Mathematics', 'A comprehensive study of business strategies and management principles.', 930);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('b5db795d-1082-4af1-a532-500b5564a0eb', 'Advanced Mathematics', 'A course designed to enhance creative writing skills across various genres.', 181);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('b4a3007c-e6a8-4c2e-8c48-60b4d27c3a0f', 'Environmental Science', 'An indepth exploration of mathematical concepts and theories.', 155);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('702b333c-b5ed-44de-b5fa-55742e5cd725', 'Business Management', 'A course designed to enhance creative writing skills across various genres.', 619);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('57f3d0ed-4803-4ea8-a28c-1f182cdc83a2', 'Introduction to Computer Science', 'A course designed to enhance creative writing skills across various genres.', 887);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('7f2886a2-89be-4a78-a34e-e720c2cead3c', 'Creative Writing', 'A comprehensive study of business strategies and management principles.', 184);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('4ea8329c-633a-4c1f-b498-d4f4ecb035d4', 'Advanced Mathematics', 'A comprehensive study of business strategies and management principles.', 942);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('eb8535ed-7fd5-45b0-886c-2cfd8708c5aa', 'Business Management', 'A course designed to enhance creative writing skills across various genres.', 120);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('d43c0164-7ca1-4111-aead-28982c58765c', 'Advanced Mathematics', 'A comprehensive study of business strategies and management principles.', 174);
INSERT INTO "Course" ("id", "name", "description", "duration") VALUES ('534e9061-b70f-487c-9221-06b73bc23b9a', 'Advanced Mathematics', 'An indepth exploration of mathematical concepts and theories.', 35);

INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('900e3199-f77e-4649-9872-b76db2ff85af', 'Maple Residence', 'Dormitory', 'Private single room with a study area.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('cfc1d772-e110-426e-b0b7-d6919a3ee4ef', 'Oakwood Dormitory', 'Apartment', 'Private single room with a study area.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('06f58846-fded-4f0a-8218-8d2230052b9a', 'Pineview Hall', 'Suite', 'Private single room with a study area.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('3f0d7b71-b6f7-42a9-b88d-661cf42c61b1', 'Sunrise Hostel', 'Dormitory', 'Shared room with excellent community space.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('37491ac9-cd91-47f1-9b49-9467a5c059f6', 'Sunrise Hostel', 'Shared Room', 'Shared room with excellent community space.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('aa21485d-51c6-4b87-bc2a-e94cef154b6b', 'Maple Residence', 'Shared Room', 'Shared room with excellent community space.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('4e8b620b-dc3c-4c98-8ca7-8b73858700a8', 'Pineview Hall', 'Dormitory', 'Luxurious suite with all facilities included.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('2a79c186-e6e5-4e41-9528-9d4b7f40c3eb', 'Maple Residence', 'Suite', 'Spacious apartment with a great view.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('eaf7b8e2-881e-467f-9a9d-ce4f5ade2ea5', 'Oakwood Dormitory', 'Single Room', 'Luxurious suite with all facilities included.');
INSERT INTO "Accommodation" ("id", "name", "type", "description") VALUES ('b84d9a92-0b58-437b-bee2-68d7fd9edb18', 'Oakwood Dormitory', 'Dormitory', 'Spacious apartment with a great view.');

INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('bd8ed709-6f4f-4630-b763-ffe6b677fdbb', 'Olivia Jones', '182Orin64@hotmail.com', '2345678901', '8765432109', 'Inactive', 'REG567890', 'UID34567');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('8e1e8f8c-3de5-4212-850e-cf0d27cd1222', 'Sophia Brown', '190Marilou.Weissnat76@hotmail.com', '3456789012', '7654321098', 'Pending', 'REG345678', 'UID12345');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('7bc5d527-93ba-4a9f-83ba-4f7b8fc1dcb1', 'Olivia Jones', '198Walker_Hand@hotmail.com', '2345678901', '9876543210', 'Active', 'REG123456', 'UID34567');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('c39bfbf5-d427-42ea-8474-2463ae6cdf05', 'James Williams', '206Hilario.Fahey87@hotmail.com', '4567890123', '5432109876', 'Active', 'REG456789', 'UID12345');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('07927d16-d79e-40e0-8927-d77e2e8cae6f', 'Sophia Brown', '214Kathlyn.McCullough@gmail.com', '1234567890', '9876543210', 'Pending', 'REG234567', 'UID45678');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('f58858b2-9432-416e-9663-b17dc9ff58fc', 'Olivia Jones', '222Maynard71@hotmail.com', '5678901234', '6543210987', 'Active', 'REG456789', 'UID56789');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('e2aa6ecd-ea11-4796-bc95-93476363cdd4', 'Sophia Brown', '230Marc_Lind85@yahoo.com', '4567890123', '5432109876', 'Active', 'REG123456', 'UID34567');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('3e9a6b5a-b959-4831-9b37-ed0ee2421283', 'Sophia Brown', '238Roger.Schinner@yahoo.com', '4567890123', '9876543210', 'Active', 'REG456789', 'UID34567');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('0ef4044f-a498-4c4f-a8f2-a7aceb628a42', 'Olivia Jones', '246Hector_Wiza9@hotmail.com', '2345678901', '8765432109', 'Pending', 'REG123456', 'UID23456');
INSERT INTO "Student" ("id", "name", "email", "phone", "alternateNumber", "eduportStatus", "registrationNumber", "uniqueId") VALUES ('443214c9-49f4-4d18-b2f3-bfd851fc981b', 'James Williams', '254Mabelle.Wilkinson38@yahoo.com', '1234567890', '6543210987', 'Active', 'REG567890', 'UID12345');

INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('da07f3b8-06cc-4691-b868-306377de36a1', 'John Doe', '262Rene.Rohan@gmail.com', '4567890123', '9876543210', 'f58858b2-9432-416e-9663-b17dc9ff58fc');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('ddeaabb1-59b2-4920-b937-ec9de1f85f74', 'Jane Smith', '267Ramona82@gmail.com', '3456789012', '9876543210', '443214c9-49f4-4d18-b2f3-bfd851fc981b');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('2f34cef6-acb4-4f15-8a09-0bbf09542932', 'Chris Brown', '272Modesto.Howe@yahoo.com', '1234567890', '9876543210', 'bd8ed709-6f4f-4630-b763-ffe6b677fdbb');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('ba0379c0-42a9-4a96-bdfe-a8aeac65ac15', 'John Doe', '277Rosalia82@gmail.com', '5678901234', '6543210987', '7bc5d527-93ba-4a9f-83ba-4f7b8fc1dcb1');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('fe1bb00b-4c1a-41d6-9abc-198ae0197422', 'John Doe', '282Astrid.Towne52@gmail.com', '2345678901', '8765432109', '8e1e8f8c-3de5-4212-850e-cf0d27cd1222');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('f11f8b49-1cec-4eac-ba76-6a9dc12832ef', 'Emily Davis', '287Loyal.Nikolaus24@yahoo.com', '1234567890', '7654321098', 'c39bfbf5-d427-42ea-8474-2463ae6cdf05');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('01dbd156-e720-46ac-a9c4-5931cf4087c4', 'Emily Davis', '292Dominic.Flatley@yahoo.com', '2345678901', '6543210987', '7bc5d527-93ba-4a9f-83ba-4f7b8fc1dcb1');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('f8a75e09-e627-4951-9966-a394d8e42375', 'Jane Smith', '297Markus_Roob@hotmail.com', '3456789012', '6543210987', 'bd8ed709-6f4f-4630-b763-ffe6b677fdbb');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('6301927b-da9b-42fb-ba08-1b0a05c2b20e', 'Jane Smith', '302Kiel_Daniel@hotmail.com', '2345678901', '8765432109', '07927d16-d79e-40e0-8927-d77e2e8cae6f');
INSERT INTO "Parent" ("id", "name", "email", "phone", "alternateNumber", "studentId") VALUES ('81693a85-c733-4c18-b3ec-0ce60bb89b7e', 'John Doe', '307Georgiana97@yahoo.com', '2345678901', '6543210987', 'c39bfbf5-d427-42ea-8474-2463ae6cdf05');

INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('a7cb1103-2167-4a49-978d-fe32da7c450a', '180.25', 'Confirmed', 'R54321', false, '8c68c925-f18b-41c6-8cb3-c7d440fffe85', '8e1e8f8c-3de5-4212-850e-cf0d27cd1222');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('2b65a3ca-9d82-4d27-99f7-75883cd3ed03', '120.50', 'Confirmed', 'R12345', false, 'e2f9729d-de29-4d6b-b8df-985bdce04421', '443214c9-49f4-4d18-b2f3-bfd851fc981b');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('9423611e-8691-44da-a086-fb0bc321602b', '75.75', 'Cancelled', 'R12345', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f58858b2-9432-416e-9663-b17dc9ff58fc');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('b3f7c9ce-ad72-4389-8f8e-99f2f6b9cdd1', '250.00', 'Cancelled', 'R98765', true, 'a13d2700-82ab-4c65-9a9c-42f8c393a664', 'c39bfbf5-d427-42ea-8474-2463ae6cdf05');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('7e958582-5f8a-4dca-b1a6-2106fb141dd1', '75.75', 'Pending', 'R67890', false, '3666777e-31e7-464a-8751-0d2aa64384bf', 'e2aa6ecd-ea11-4796-bc95-93476363cdd4');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('d529d1be-4ecf-4ba8-ac29-6ada84bca28b', '120.50', 'Pending', 'R11223', false, '1ebf1a6a-4d3b-4fee-bfbf-05d55d94179b', '7bc5d527-93ba-4a9f-83ba-4f7b8fc1dcb1');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('206f5be9-6adc-4d98-b287-dcc28565d37e', '300.00', 'Cancelled', 'R12345', true, 'e2f9729d-de29-4d6b-b8df-985bdce04421', 'bd8ed709-6f4f-4630-b763-ffe6b677fdbb');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('88d5097a-fc4b-4f75-8dce-1ec987ad9e18', '250.00', 'Confirmed', 'R12345', true, '834295bb-f39b-4213-80cd-15cd7df11479', '8e1e8f8c-3de5-4212-850e-cf0d27cd1222');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('6dd23039-f15c-439b-a112-ca042891979f', '250.00', 'Confirmed', 'R54321', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0ef4044f-a498-4c4f-a8f2-a7aceb628a42');
INSERT INTO "Booking" ("id", "bookingFee", "status", "receiptNumber", "scholarshipPreference", "userId", "studentId") VALUES ('04fe58cf-cdc4-42de-afed-a15a83991b89', '75.75', 'Pending', 'R67890', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f58858b2-9432-416e-9663-b17dc9ff58fc');

INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('4b50534c-be7a-4821-aac9-98e5cac588bf', 'Waiting', '88d5097a-fc4b-4f75-8dce-1ec987ad9e18', '900e3199-f77e-4649-9872-b76db2ff85af');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('29f577e0-dc7e-443c-9140-5fdb943174cb', 'Waiting', 'd529d1be-4ecf-4ba8-ac29-6ada84bca28b', 'cfc1d772-e110-426e-b0b7-d6919a3ee4ef');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('8f294c66-505c-4e60-a5d0-d344897d118d', 'Cancelled', '88d5097a-fc4b-4f75-8dce-1ec987ad9e18', '2a79c186-e6e5-4e41-9528-9d4b7f40c3eb');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('e56482fc-0dbd-46a2-81ad-78e457d7805c', 'Cancelled', 'a7cb1103-2167-4a49-978d-fe32da7c450a', 'b84d9a92-0b58-437b-bee2-68d7fd9edb18');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('ca174f37-2643-4bcf-9482-c3f9b85a3760', 'Cancelled', 'b3f7c9ce-ad72-4389-8f8e-99f2f6b9cdd1', 'cfc1d772-e110-426e-b0b7-d6919a3ee4ef');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('fae02636-8fcf-47f8-9498-72e100782673', 'Completed', '6dd23039-f15c-439b-a112-ca042891979f', 'cfc1d772-e110-426e-b0b7-d6919a3ee4ef');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('b75ea5ba-5cd2-4588-91c9-c02aefe22b9f', 'Pending', '04fe58cf-cdc4-42de-afed-a15a83991b89', 'cfc1d772-e110-426e-b0b7-d6919a3ee4ef');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('1ad29afc-ec41-4bd0-8b29-8b4ecd3ff689', 'Pending', '7e958582-5f8a-4dca-b1a6-2106fb141dd1', 'aa21485d-51c6-4b87-bc2a-e94cef154b6b');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('52bbd9f5-e3e9-46ce-bd64-d959d5fbda9c', 'Cancelled', '2b65a3ca-9d82-4d27-99f7-75883cd3ed03', '2a79c186-e6e5-4e41-9528-9d4b7f40c3eb');
INSERT INTO "BookingAccommodation" ("id", "status", "bookingId", "accommodationId") VALUES ('d7b99111-f00e-40c4-9db0-83994a61beed', 'Waiting', '206f5be9-6adc-4d98-b287-dcc28565d37e', 'eaf7b8e2-881e-467f-9a9d-ce4f5ade2ea5');

INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('df9ff4b9-b1f0-472d-aadb-39631b7726ec', 'Withdrawn', 'e2aa6ecd-ea11-4796-bc95-93476363cdd4', '4ea8329c-633a-4c1f-b498-d4f4ecb035d4');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('03c3734d-9823-46e4-9019-45b834139926', 'Enrolled', '3e9a6b5a-b959-4831-9b37-ed0ee2421283', 'b4a3007c-e6a8-4c2e-8c48-60b4d27c3a0f');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('5fc62d9c-e91e-48b6-bb05-d3c6baea1dc1', 'Completed', 'e2aa6ecd-ea11-4796-bc95-93476363cdd4', '534e9061-b70f-487c-9221-06b73bc23b9a');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('81ba3a67-42c8-425a-a190-4f75f153a90a', 'Enrolled', 'f58858b2-9432-416e-9663-b17dc9ff58fc', '4ea8329c-633a-4c1f-b498-d4f4ecb035d4');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('acd1e08f-ff4c-44f5-90ac-87b96329c315', 'Withdrawn', '3e9a6b5a-b959-4831-9b37-ed0ee2421283', '702b333c-b5ed-44de-b5fa-55742e5cd725');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('504b5134-3e21-4b85-a70f-6bfdd9c653bc', 'Enrolled', '8e1e8f8c-3de5-4212-850e-cf0d27cd1222', '690edcf2-9cfc-4b26-bad1-c47d569ffd1a');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('b261ffc0-5294-410a-8f7a-ebcf1b950bcd', 'Enrolled', '7bc5d527-93ba-4a9f-83ba-4f7b8fc1dcb1', 'b4a3007c-e6a8-4c2e-8c48-60b4d27c3a0f');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('14e92dac-b6b9-4c1c-a44a-c39fcc9f54c2', 'Pending', 'c39bfbf5-d427-42ea-8474-2463ae6cdf05', 'b5db795d-1082-4af1-a532-500b5564a0eb');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('e52892eb-6172-416c-9e60-67f36429de73', 'Deferred', '443214c9-49f4-4d18-b2f3-bfd851fc981b', 'eb8535ed-7fd5-45b0-886c-2cfd8708c5aa');
INSERT INTO "StudentCourse" ("id", "status", "studentId", "courseId") VALUES ('88589f25-8d9f-44c4-b4ae-3f54a48bc035', 'Withdrawn', '443214c9-49f4-4d18-b2f3-bfd851fc981b', '690edcf2-9cfc-4b26-bad1-c47d569ffd1a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
