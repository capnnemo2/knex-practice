BEGIN;

INSERT INTO blogful_articles (title, date_published, content) VALUES
('How to cook rats',                                now() - '29 days'::INTERVAL, 'A poem called If'),
('Nickles for nuggets',                             now() - '28 days'::INTERVAL, 'By Rudyard Kipling'),
('Catch-22',                                        now() - '27 days'::INTERVAL, 'Here are some words'),
('Talented Tyrannasaurs',                           now() - '26 days'::INTERVAL, 'They really were not terrible. They were just an apex predator'),
('Silly Stegosaurs',                                now() - '25 days'::INTERVAL, 'Herbivores with plates on their backs.'),
('Lithe Longnecks',                                 now() - '24 days'::INTERVAL, 'Proving for all eternity that you can be huge yet graceful'),
('Terrible Pterodactyls',                           now() - '23 days'::INTERVAL, 'I like pancakes and waffles'),
('Marvelous Mrs. Maple',                            now() - '22 days'::INTERVAL, 'Maple syrup improves some breakfasts'),
('Stupendous Man',                                  now() - '21 days'::INTERVAL, 'Breakfast is the best meal'),
('Spaceman Spiff',                                  now() - '20 days'::INTERVAL, 'ZOUNDS!'),
('Transmogrifier',                                  now() - '19 days'::INTERVAL, 'The Office is one of the best shows ever'),
('Duplicator',                                      now() - '18 days'::INTERVAL, 'Calvin and Hobbes are the best comic strip ever'),
('Excellent Elephant Elevator',                     now() - '17 days'::INTERVAL, 'Welcome to Eternity'),
('Superfluous Squid Squirts Suspicious Substance',  now() - '16 days'::INTERVAL, 'The answer to life, the universe, and everything is 42'),
('Killer Kelp Keeps Keels Clean',                   now() - '15 days'::INTERVAL, 'Knowing the answer is less valuable if you do not know the question'),
('Batty Butterflies Bitch about Bumpkins',          now() - '14 days'::INTERVAL, 'I guess some of my content was too long'),
('Krazy Kaleiascope Cracks Kraken',                 now() - '13 days'::INTERVAL, 'Making things shorter since 1987'),
('Gorgeous Gumdrops Glitter with Glee',             now() - '12 days'::INTERVAL, 'Ring toss is not a terrible bar game'),
('Luscious Lemurs Laze about London',               now() - '11 days'::INTERVAL, 'Basically cornhole without the beer'),
('Youthful Yaks Yak all Year',                      now() - '10 days'::INTERVAL, 'Lawn darts were banned because they are weapons'),
('Xenophobic Xylophones Exceed Expectations',       now() - '9 days'::INTERVAL, 'Opportunity with responsibility');

COMMIT;