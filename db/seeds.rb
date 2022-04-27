# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create(name: 'testx', email: 'testx@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 50.00, bio: 'I am a pretty neat guy')
u2 = User.create(name: 'testx1', email: 'testx1@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 80.00)
u3 = User.create(name: 'testx123', email: 'testx123@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 120.00)
u4 = User.create(name: 'Austin', email: 'austin@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 100000.00 )
u5 = User.create(name: 'Joe', email: 'joe@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 100000.00 )
u6 = User.create(name: 'Steve', email: 'steve@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 100000.00 )
u7 = User.create(name: 'Randy', email: 'randy@test.com', password: '123456', image: 'https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2', balance: 100000.00 )



c1 = Campaign.create(name: 'Matt Hays Memorial Fund', description: 'Matt Hays Memorial', image: 'https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/6879821_1447383818.6328.jpg', current_amount: 5000.00, goal: 15000.00, expiration: 'May 3rd 2023 10:10', user_id:u1.id)
c2 = Campaign.create(name: 'Barn Fire', description: 'Barn has been burnt up', image: 'https://img.hobbyfarms.com/wp-content/uploads/2018/01/18040448/barn-fire-safety-1928639.jpg', current_amount: 2000.00, goal: 20000.00, expiration: 'June 16th 2023 10:10', user_id:u2.id)
c3 = Campaign.create(name: 'House Fire', description: 'House has been burnt up', image: 'https://www.puroclean.com/wp-content/uploads/2019/08/AdobeStock_166647716-1.jpeg', current_amount: 4500.00, goal: 25000.00, expiration: 'April 1st 2013 10:10', user_id:u2.id)
c4 = Campaign.create(name: 'New Business', description: 'Opening up a new Business in NYC', image: 'https://www.laytoncity.org/LC/CommunityCalendar/RenderImageOrFile/0abce416-ee2d-4da6-97ce-4f6d4e554867', current_amount: 1750.00, goal: 15000.00, expiration: 'December 1st 2023 10:10', user_id:u5.id)
c5 = Campaign.create(name: 'Forge Fundraising', description: 'New Blacksmith in town', image: 'https://nt.global.ssl.fastly.net/images/1431820118708-webericmcdonaldanvilfireattheforgeeastdevonbranscombe.jpg?width=1920&auto=webp&crop=16:7', current_amount: 9500.00, goal: 25000.00, expiration: 'November 1st 2023 10:10', user_id:u4.id)
c6 = Campaign.create(name: 'Vegas Kids Basketball Program', description: 'AAU team for the community', image: 'https://vegasfamilyevents.com/wp-content/uploads/2019/09/vegas-kids-sports-featured-image-640x480.jpg', current_amount: 4250.00, goal: 22500.00, expiration: 'September 10th 2023 10:10', user_id:u7.id)
c7 = Campaign.create(name: 'Utah Kids Football Program', description: 'Youth kids, Football 4 Families', image: 'https://az388273.vo.msecnd.net/campsystem/images/1/CampAccountBanner_50e7aa13a8854af69583f3b79048af8b.jpg', current_amount: 7000.00, goal: 26000.00, expiration: 'October 26th 2023 10:10', user_id:u6.id)

d1 = Donation.create(comment: 'Hope everything is good', amount: 100.00, anonymous: false, user_id:u1.id, campaign_id:c1.id, created_at: 'May 5th 2020 09:10')
d2 = Donation.create(comment: 'Oh no, the barn', amount: 300.00, anonymous: false, user_id:u2.id, campaign_id:c2.id, created_at: 'June 16th 2021 10:10')
d3 = Donation.create(comment: 'Hope this helps you out!', amount: 450.00, anonymous: false, user_id:u4.id, campaign_id:c5.id, created_at: 'November 10th 2017 09:10')
d3 = Donation.create(comment: 'test1', amount: 450.00, anonymous: false, user_id:u4.id, campaign_id:c4.id, created_at: 'July 10th 2020 12:10')
d3 = Donation.create(comment: 'test2', amount: 600.00, anonymous: false, user_id:u4.id, campaign_id:c2.id, created_at: 'June 20th 2021 11:10')
d4 = Donation.create(comment: 'Congrats! Goodluck', amount: 400.00, anonymous: false, user_id:u5.id, campaign_id:c4.id, created_at: 'December 10th 2020 10:10')
d5 = Donation.create(comment: 'This should help the team! #UTAH', amount: 500.00, anonymous: false, user_id:u6.id, campaign_id:c7.id, created_at: 'October 28th 2021 11:00')
d6 = Donation.create(comment: '#VegasStrong', amount: 400.00, anonymous: false, user_id:u7.id, campaign_id:c6.id, created_at: 'September 1st 2021 09:00')
d7 = Donation.create(comment: '#VegasStrong', amount: 400.00, anonymous: false, user_id:u7.id, campaign_id:c6.id, created_at: 'September 10th 2021 10:00')
d8 = Donation.create(comment: '#VegasStrong', amount: 400.00, anonymous: false, user_id:u7.id, campaign_id:c6.id, created_at: 'September 20th 2021 11:00')
d9 = Donation.create(comment: '#VegasStrong', amount: 400.00, anonymous: false, user_id:u7.id, campaign_id:c6.id, created_at: 'September 30th 2021 12:00')
d10 = Donation.create(comment: 'Oh no, the barn', amount: 120.00, anonymous: false, user_id:u3.id, campaign_id:c3.id, created_at: 'April 8th 2019 10:10')
d11 = Donation.create(comment: 'TEST', amount: 5000.00, anonymous: false, user_id:u4.id, campaign_id:c5.id)
d12 = Donation.create(comment: 'TEST', amount: 5000.00, anonymous: false, user_id:u5.id, campaign_id:c5.id)
d13 = Donation.create(comment: 'TEST', amount: 5000.00, anonymous: false, user_id:u6.id, campaign_id:c5.id)
d14 = Donation.create(comment: 'TEST', amount: 5000.00, anonymous: false, user_id:u7.id, campaign_id:c5.id)


up1 = Update.create(comment: 'Memorial will be held on May 10th', image:'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=', campaign_id:c1.id)
up2 = Update.create(comment: 'Barn is getting fixed', image:'https://img.hobbyfarms.com/wp-content/uploads/16113232/site-your-barn_istock.jpg', campaign_id:c2.id)
up3 = Update.create(comment: 'Still looking for a new home', image:'https://pinoyhousedesigns.com/wp-content/uploads/2018/03/AA-103A.jpg', campaign_id:c3.id)
up4 = Update.create(comment: 'Business opens in 12 days, thanks everyone', image:'https://s3.us-east-1.amazonaws.com/co-assets/assets/images/_fbTw/new-business.jpg', campaign_id:c4.id)
up5 = Update.create(comment: 'Just bought a new Anvil', image:'https://t3.ftcdn.net/jpg/04/03/11/26/360_F_403112622_1U3D7n9ElskJzQWJPZc6SjrjR4pOHQV8.jpg', campaign_id:c5.id)
up6 = Update.create(comment: 'League starts on October 1st! Sign up', image:'https://media.lasvegassun.com/media/img/photos/2017/07/27/20170726_Sun_Zaon_Collins_LE7_t653.jpg?214bc4f9d9bd7c08c7d0f6599bb3328710e01e7b', campaign_id:c6.id)
up7 = Update.create(comment: 'Thanks for the donations. Kids are getting their equipment today', image:'https://deseret.brightspotcdn.com/dims4/default/b5745d1/2147483647/strip/true/crop/800x529+0+2/resize/840x555!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FUqJOAQegXm_B-3dKx17gg0fNMcM%3D%2F0x0%3A800x533%2F800x533%2Ffilters%3Afocal%28400x266%3A401x267%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F18174208%2F2fe2595069', campaign_id:c7.id)


cat1 = Category.create(name:'Memorial')
cat2 = Category.create(name:'Home Renivation')
cat3 = Category.create(name:'Sports')
cat4 = Category.create(name:'Business')
cat5 = Category.create(name:'Hobbies')
cat6 = Category.create(name:'Events')


camCat1 = CampaignCategory.create(category_id:cat1.id, campaign_id:c1.id)
camCat2 = CampaignCategory.create(category_id:cat2.id, campaign_id:c2.id)
camCat2 = CampaignCategory.create(category_id:cat2.id, campaign_id:c3.id)
camCat2 = CampaignCategory.create(category_id:cat4.id, campaign_id:c4.id)
camCat2 = CampaignCategory.create(category_id:cat5.id, campaign_id:c5.id)
camCat2 = CampaignCategory.create(category_id:cat3.id, campaign_id:c6.id)
camCat2 = CampaignCategory.create(category_id:cat3.id, campaign_id:c7.id)




puts "all users: #{User.all.length}"
puts "all campaigns: #{Campaign.all.length}"
puts "all donations: #{Donation.all.length}"
puts "all updates: #{Update.all.length}"
puts "all campaign_categories: #{CampaignCategory.all.length}"

