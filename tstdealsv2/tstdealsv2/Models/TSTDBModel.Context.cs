﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace tstdealsv2.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class tstdbvEntities : DbContext
    {
        public tstdbvEntities()
            : base("name=tstdbvEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<tstaccount> tstaccounts { get; set; }
        public DbSet<tstaccount_activitylog> tstaccount_activitylog { get; set; }
        public DbSet<tstaccount_address> tstaccount_address { get; set; }
        public DbSet<tstaccount_alertrule> tstaccount_alertrule { get; set; }
        public DbSet<tstaccount_alerts> tstaccount_alerts { get; set; }
        public DbSet<tstaccount_authentication> tstaccount_authentication { get; set; }
        public DbSet<tstaccount_bankaccount> tstaccount_bankaccount { get; set; }
        public DbSet<tstaccount_connections> tstaccount_connections { get; set; }
        public DbSet<tstaccount_country> tstaccount_country { get; set; }
        public DbSet<tstaccount_currency> tstaccount_currency { get; set; }
        public DbSet<tstaccount_interests> tstaccount_interests { get; set; }
        public DbSet<tstaccount_language> tstaccount_language { get; set; }
        public DbSet<tstaccount_settings> tstaccount_settings { get; set; }
        public DbSet<tstaccount_stateprovince> tstaccount_stateprovince { get; set; }
        public DbSet<tstaccount_store> tstaccount_store { get; set; }
        public DbSet<tstaccount_taxrates> tstaccount_taxrates { get; set; }
        public DbSet<tstapplication> tstapplications { get; set; }
        public DbSet<tstapplications_collections> tstapplications_collections { get; set; }
        public DbSet<tstapplications_collectionsitems> tstapplications_collectionsitems { get; set; }
        public DbSet<tstapplications_developers> tstapplications_developers { get; set; }
        public DbSet<tstapplications_searches> tstapplications_searches { get; set; }
        public DbSet<tstarchive> tstarchives { get; set; }
        public DbSet<tstarchives_searches> tstarchives_searches { get; set; }
        public DbSet<tstartwork> tstartworks { get; set; }
        public DbSet<tstartworks_artists> tstartworks_artists { get; set; }
        public DbSet<tstartworks_collections> tstartworks_collections { get; set; }
        public DbSet<tstartworks_collectionsitems> tstartworks_collectionsitems { get; set; }
        public DbSet<tstartworks_publishers> tstartworks_publishers { get; set; }
        public DbSet<tstartworks_searches> tstartworks_searches { get; set; }
        public DbSet<tstauction> tstauctions { get; set; }
        public DbSet<tstauctions_brands> tstauctions_brands { get; set; }
        public DbSet<tstauctions_collections> tstauctions_collections { get; set; }
        public DbSet<tstauctions_collectionsitems> tstauctions_collectionsitems { get; set; }
        public DbSet<tstauctions_offers> tstauctions_offers { get; set; }
        public DbSet<tstauctions_searches> tstauctions_searches { get; set; }
        public DbSet<tstblog_categories> tstblog_categories { get; set; }
        public DbSet<tstblog_comments> tstblog_comments { get; set; }
        public DbSet<tstblog_links> tstblog_links { get; set; }
        public DbSet<tstblog_notifications> tstblog_notifications { get; set; }
        public DbSet<tstblog_photos> tstblog_photos { get; set; }
        public DbSet<tstblog_post> tstblog_post { get; set; }
        public DbSet<tstblog_searches> tstblog_searches { get; set; }
        public DbSet<tstblog_videos> tstblog_videos { get; set; }
        public DbSet<tstbrand> tstbrands { get; set; }
        public DbSet<tstbrands_searches> tstbrands_searches { get; set; }
        public DbSet<tstcalendar_events> tstcalendar_events { get; set; }
        public DbSet<tstcampaign> tstcampaigns { get; set; }
        public DbSet<tstcampaigns_brands> tstcampaigns_brands { get; set; }
        public DbSet<tstcampaigns_collections> tstcampaigns_collections { get; set; }
        public DbSet<tstcampaigns_collectionsitems> tstcampaigns_collectionsitems { get; set; }
        public DbSet<tstcampaigns_pollanswer> tstcampaigns_pollanswer { get; set; }
        public DbSet<tstcampaigns_polls> tstcampaigns_polls { get; set; }
        public DbSet<tstcampaigns_searches> tstcampaigns_searches { get; set; }
        public DbSet<tstcampaigns_votes> tstcampaigns_votes { get; set; }
        public DbSet<tstclassified> tstclassifieds { get; set; }
        public DbSet<tstclassifieds_collections> tstclassifieds_collections { get; set; }
        public DbSet<tstclassifieds_collectionsitems> tstclassifieds_collectionsitems { get; set; }
        public DbSet<tstclassifieds_searches> tstclassifieds_searches { get; set; }
        public DbSet<tstclub> tstclubs { get; set; }
        public DbSet<tstclubs_searches> tstclubs_searches { get; set; }
        public DbSet<tstclubs_subscriptions> tstclubs_subscriptions { get; set; }
        public DbSet<tstcompetition> tstcompetitions { get; set; }
        public DbSet<tstcompetitions_brands> tstcompetitions_brands { get; set; }
        public DbSet<tstcompetitions_collections> tstcompetitions_collections { get; set; }
        public DbSet<tstcompetitions_collectionsitems> tstcompetitions_collectionsitems { get; set; }
        public DbSet<tstcompetitions_searches> tstcompetitions_searches { get; set; }
        public DbSet<tstcours> tstcourses { get; set; }
        public DbSet<tstcourses_assignmentanswers> tstcourses_assignmentanswers { get; set; }
        public DbSet<tstcourses_assignments> tstcourses_assignments { get; set; }
        public DbSet<tstcourses_assignmentsquestions> tstcourses_assignmentsquestions { get; set; }
        public DbSet<tstcourses_collections> tstcourses_collections { get; set; }
        public DbSet<tstcourses_collectionsitems> tstcourses_collectionsitems { get; set; }
        public DbSet<tstcourses_enrollment> tstcourses_enrollment { get; set; }
        public DbSet<tstcourses_gradebook> tstcourses_gradebook { get; set; }
        public DbSet<tstcourses_notes> tstcourses_notes { get; set; }
        public DbSet<tstcourses_searches> tstcourses_searches { get; set; }
        public DbSet<tstcourses_testresults> tstcourses_testresults { get; set; }
        public DbSet<tstcourses_tests> tstcourses_tests { get; set; }
        public DbSet<tstcourses_testsanswers> tstcourses_testsanswers { get; set; }
        public DbSet<tstcourses_testsquestions> tstcourses_testsquestions { get; set; }
        public DbSet<tstcourses_tutors> tstcourses_tutors { get; set; }
        public DbSet<tstdownload> tstdownloads { get; set; }
        public DbSet<tstdownloads_searches> tstdownloads_searches { get; set; }
        public DbSet<tstebook> tstebooks { get; set; }
        public DbSet<tstebooks_authors> tstebooks_authors { get; set; }
        public DbSet<tstebooks_collections> tstebooks_collections { get; set; }
        public DbSet<tstebooks_collectionsitems> tstebooks_collectionsitems { get; set; }
        public DbSet<tstebooks_publishers> tstebooks_publishers { get; set; }
        public DbSet<tstebooks_searches> tstebooks_searches { get; set; }
        public DbSet<tstfile> tstfiles { get; set; }
        public DbSet<tstfiles_audio> tstfiles_audio { get; set; }
        public DbSet<tstfiles_folders> tstfiles_folders { get; set; }
        public DbSet<tstfiles_images> tstfiles_images { get; set; }
        public DbSet<tstfiles_pdf> tstfiles_pdf { get; set; }
        public DbSet<tstfiles_videos> tstfiles_videos { get; set; }
        public DbSet<tstforum> tstforums { get; set; }
        public DbSet<tstforums_group> tstforums_group { get; set; }
        public DbSet<tstforums_post> tstforums_post { get; set; }
        public DbSet<tstforums_privatemessage> tstforums_privatemessage { get; set; }
        public DbSet<tstforums_searches> tstforums_searches { get; set; }
        public DbSet<tstforums_subscriptions> tstforums_subscriptions { get; set; }
        public DbSet<tstforums_topic> tstforums_topic { get; set; }
        public DbSet<tstmovy> tstmovies { get; set; }
        public DbSet<tstmovies_actors> tstmovies_actors { get; set; }
        public DbSet<tstmovies_collections> tstmovies_collections { get; set; }
        public DbSet<tstmovies_collectionsitems> tstmovies_collectionsitems { get; set; }
        public DbSet<tstmovies_crew> tstmovies_crew { get; set; }
        public DbSet<tstmovies_episodes> tstmovies_episodes { get; set; }
        public DbSet<tstmovies_searches> tstmovies_searches { get; set; }
        public DbSet<tstmovies_series> tstmovies_series { get; set; }
        public DbSet<tstmovies_studios> tstmovies_studios { get; set; }
        public DbSet<tstmusic_albumitems> tstmusic_albumitems { get; set; }
        public DbSet<tstmusic_albums> tstmusic_albums { get; set; }
        public DbSet<tstmusic_artists> tstmusic_artists { get; set; }
        public DbSet<tstmusic_genres> tstmusic_genres { get; set; }
        public DbSet<tstmusic_playlist> tstmusic_playlist { get; set; }
        public DbSet<tstmusic_searches> tstmusic_searches { get; set; }
        public DbSet<tstmusic_studios> tstmusic_studios { get; set; }
        public DbSet<tstmusic_tracks> tstmusic_tracks { get; set; }
        public DbSet<tstnew> tstnews { get; set; }
        public DbSet<tstnewsletter> tstnewsletters { get; set; }
        public DbSet<tstnewsletters_brands> tstnewsletters_brands { get; set; }
        public DbSet<tstnewsletters_collections> tstnewsletters_collections { get; set; }
        public DbSet<tstnewsletters_collectionsitems> tstnewsletters_collectionsitems { get; set; }
        public DbSet<tstnewsletters_searches> tstnewsletters_searches { get; set; }
        public DbSet<tstnewsletters_subscription> tstnewsletters_subscription { get; set; }
        public DbSet<tstpreset> tstpresets { get; set; }
        public DbSet<tstpresets_collections> tstpresets_collections { get; set; }
        public DbSet<tstpresets_collectionsitems> tstpresets_collectionsitems { get; set; }
        public DbSet<tstpresets_developers> tstpresets_developers { get; set; }
        public DbSet<tstpresets_searches> tstpresets_searches { get; set; }
        public DbSet<tstproduct> tstproducts { get; set; }
        public DbSet<tstproducts_affiliates> tstproducts_affiliates { get; set; }
        public DbSet<tstproducts_banners> tstproducts_banners { get; set; }
        public DbSet<tstproducts_cart> tstproducts_cart { get; set; }
        public DbSet<tstproducts_customers> tstproducts_customers { get; set; }
        public DbSet<tstproducts_discounts> tstproducts_discounts { get; set; }
        public DbSet<tstproducts_giftcards> tstproducts_giftcards { get; set; }
        public DbSet<tstproducts_manufacturers> tstproducts_manufacturers { get; set; }
        public DbSet<tstproducts_orderitem> tstproducts_orderitem { get; set; }
        public DbSet<tstproducts_orders> tstproducts_orders { get; set; }
        public DbSet<tstproducts_recurringpayments> tstproducts_recurringpayments { get; set; }
        public DbSet<tstproducts_salesreturns> tstproducts_salesreturns { get; set; }
        public DbSet<tstproducts_searches> tstproducts_searches { get; set; }
        public DbSet<tstproducts_tags> tstproducts_tags { get; set; }
        public DbSet<tstproducts_transactions> tstproducts_transactions { get; set; }
        public DbSet<tstproducts_wishlist> tstproducts_wishlist { get; set; }
        public DbSet<tstshortstory> tstshortstories { get; set; }
        public DbSet<tstshortstories_collections> tstshortstories_collections { get; set; }
        public DbSet<tstshortstories_collectionsitems> tstshortstories_collectionsitems { get; set; }
        public DbSet<tstshortstories_searches> tstshortstories_searches { get; set; }
        public DbSet<tstshortstories_writers> tstshortstories_writers { get; set; }
        public DbSet<tstsystem_apierrors> tstsystem_apierrors { get; set; }
        public DbSet<tstsystem_faq> tstsystem_faq { get; set; }
        public DbSet<tstsystem_termsconditions> tstsystem_termsconditions { get; set; }
        public DbSet<tstwiki> tstwikis { get; set; }
        public DbSet<tstwikis_searches> tstwikis_searches { get; set; }
        public DbSet<tstzuckstory> tstzuckstories { get; set; }
    }
}