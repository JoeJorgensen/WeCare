# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create(name: 'testx', email: 'testx@test.com', password: '123456', image: '', balance: 50.00)
u2 = User.create(name: 'testx1', email: 'testx1@test.com', password: '123456', image: '', balance: 80.00)

c1 = Campaign.create(name: 'Matt Hays Memorial Fund', description: 'Matt Hays Memorial', image: '', current_amount: 5000.00, goal: 15000.00, expiration: 'May 3rd 2020 10:10', user_id:u1.id)
c2 = Campaign.create(name: 'Barn Fire', description: 'Barn all burnt up', image: '', current_amount: 2000.00, goal: 20000.00, expiration: 'June 16th 2020 10:10', user_id:u2.id)

d1 = Donation.create(comment: 'Hope everything is good', amount: 100.00, anonymous: false, user_id:u1.id, campaign_id:c1.id)
d2 = Donation.create(comment: 'oh no, the barn', amount: 300.00, anonymous: false, user_id:u2.id, campaign_id:c2.id)

up1 = Update.create(comment: 'Memorial will be held on May 10th', image:'', campaign_id:c1.id)
up2 = Update.create(comment: 'barn alittle better', image:'', campaign_id:c2.id)

cat1 = Category.create(name:'Memorial')
cat2 = Category.create(name:'Home Renivation')

camCat1 = CampaignCategory.create(category_id:cat1.id, campaign_id:c1.id)
camCat2 = CampaignCategory.create(category_id:cat2.id, campaign_id:c2.id)



puts "all users: #{User.all.length}"
puts "all campaigns: #{Campaign.all.length}"
puts "all donations: #{Donation.all.length}"
puts "all updates: #{Update.all.length}"
puts "all campaign_categories: #{CampaignCategory.all.length}"

