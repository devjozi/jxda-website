/**
 * Centralized services metadata for consistent rendering across homepage, listing, and detail pages.
 * Single source of truth prevents drift between pages.
 */

export interface ServiceMetadata {
  slug: string;
  title: string;
  catalogImg: string; // Used by /services listing and /services/[slug] pages
  homeImg: string;    // Used by homepage service cards
  description: string;
  fullDescription?: string;
  features?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export const servicesData: Record<string, ServiceMetadata> = {
  'route-to-market-and-route-to-consumer-development': {
    slug: 'route-to-market-and-route-to-consumer-development',
    title: 'Route-to-Market & Route-to-Consumer Development',
    catalogImg: 'route-to-market.jpg',
    homeImg: 'service1.jpg',
    description: 'Structured market entry planning, territory mapping, and channel strategy to improve product availability and conversion.',
    fullDescription: 'We design and execute route-to-market and route-to-consumer strategies that align channels, territory potential, and sales targets. This helps brands build sustainable penetration and repeat coverage across Ghana.',
    features: [
      {
        number: '01',
        title: 'Market Assessment',
        description: 'Evaluate market opportunity, channel mix, and demand patterns before rollout.'
      },
      {
        number: '02',
        title: 'Territory Mapping',
        description: 'Map territories and route plans for efficient sales and distribution coverage.'
      },
      {
        number: '03',
        title: 'Execution Framework',
        description: 'Implement structured steps-to-a-call and field execution standards.'
      }
    ]
  },
  'social-media-marketing-and-activation-campaigns': {
    slug: 'social-media-marketing-and-activation-campaigns',
    title: 'Social Media Marketing & Activation Campaigns',
    catalogImg: 'social-media-marketing.jpg',
    homeImg: 'service2.jpg',
    description: 'Integrated digital and on-ground activation campaigns that drive awareness, trial, and repeat buying.',
    fullDescription: 'We run social media marketing and activation campaigns designed to increase visibility, trial, and consumer conversion. Campaigns are managed with clear objectives, field support, and measurable outcomes.',
    features: [
      {
        number: '01',
        title: 'Campaign Planning',
        description: 'Define campaign objectives, audience targeting, and conversion strategy.'
      },
      {
        number: '02',
        title: 'Activation Execution',
        description: 'Deploy on-ground and digital activations across priority channels.'
      },
      {
        number: '03',
        title: 'Performance Tracking',
        description: 'Track engagement, conversion, and campaign outcomes for continuous improvement.'
      }
    ]
  },
  'distribution-and-logistics-coordination': {
    slug: 'distribution-and-logistics-coordination',
    title: 'Distribution & Logistics Coordination',
    catalogImg: 'distribution-logistics.jpg',
    homeImg: 'service3.jpg',
    description: 'Distribution planning, warehousing coordination, and channel fulfillment support across retail, wholesale, and key accounts.',
    fullDescription: 'Our distribution and logistics coordination model supports product stocking, replenishment, and movement across key channels. We align field and operations teams for dependable service levels.',
    features: [
      {
        number: '01',
        title: 'Stocking Planning',
        description: 'Plan inventory allocation and stocking cycles by channel and territory.'
      },
      {
        number: '02',
        title: 'Logistics Coordination',
        description: 'Coordinate warehousing and delivery operations to support market demand.'
      },
      {
        number: '03',
        title: 'Coverage Control',
        description: 'Maintain consistent market presence through structured replenishment routines.'
      }
    ]
  },
  'market-research-and-consumer-intelligence': {
    slug: 'market-research-and-consumer-intelligence',
    title: 'Market Research & Consumer Intelligence',
    catalogImg: 'market-research.jpg',
    homeImg: 'service4.jpg',
    description: 'Field research and market intelligence that provide decision-ready insights for pricing, placement, and growth.',
    fullDescription: 'We provide market research and consumer intelligence to help brands identify opportunities, close execution gaps, and strengthen decision-making across channels and regions.',
    features: [
      {
        number: '01',
        title: 'Consumer Insights',
        description: 'Capture buying behavior, preferences, and channel-level demand signals.'
      },
      {
        number: '02',
        title: 'Trade Intelligence',
        description: 'Collect field data on distribution, pricing, and competitor activity.'
      },
      {
        number: '03',
        title: 'Decision Reporting',
        description: 'Deliver structured reports for planning, optimization, and performance review.'
      }
    ]
  },
  procurement: {
    slug: 'procurement',
    title: 'Procurement',
    catalogImg: 'procurement.jpg',
    homeImg: 'service5.jpg',
    description: 'Procurement execution support for product sourcing and trade requirements aligned with your market expansion goals.',
    fullDescription: 'Our procurement support helps businesses align sourcing and supply decisions with market needs. We focus on practical procurement workflows that enable stable product availability.',
    features: [
      {
        number: '01',
        title: 'Requirement Planning',
        description: 'Define procurement needs based on sales targets and market demand.'
      },
      {
        number: '02',
        title: 'Sourcing Support',
        description: 'Support procurement activities with structured coordination and documentation.'
      },
      {
        number: '03',
        title: 'Supply Alignment',
        description: 'Align procurement timelines with distribution and channel execution plans.'
      }
    ]
  },
  'sales-team-training-and-performance-management': {
    slug: 'sales-team-training-and-performance-management',
    title: 'Sales Team Training & Performance Management',
    catalogImg: 'sales-training.jpg',
    homeImg: 'service6.jpg',
    description: 'Sales capability development, supervision, and performance management to improve execution quality and accountability.',
    fullDescription: 'We train and supervise sales teams using practical field standards and performance routines. This improves consistency, call quality, and accountability across territories.',
    features: [
      {
        number: '01',
        title: 'Sales Training',
        description: 'Build product knowledge, selling skills, and execution discipline.'
      },
      {
        number: '02',
        title: 'Performance Supervision',
        description: 'Track sales activities and coach teams against agreed KPIs.'
      },
      {
        number: '03',
        title: 'Quality Improvement',
        description: 'Use reporting feedback loops to improve coverage and conversion outcomes.'
      }
    ]
  },
  'call-center-services-for-companies': {
    slug: 'call-center-services-for-companies',
    title: 'Call Center Services for Companies',
    catalogImg: 'call-center-services.jpg',
    homeImg: 'service7.jpg',
    description: 'Standby 24/7 call center and telesales support with structured customer engagement and follow-up.',
    fullDescription: 'Our call center services provide standby support for inbound and outbound customer engagement, telesales follow-up, and structured service response.',
    features: [
      {
        number: '01',
        title: '24/7 Availability',
        description: 'Standby support model for continuous customer touchpoints.'
      },
      {
        number: '02',
        title: 'Telesales Support',
        description: 'Outbound calling workflows to support acquisition, upsell, and reactivation.'
      },
      {
        number: '03',
        title: 'Customer Service Logs',
        description: 'Structured logging and reporting of customer interactions and outcomes.'
      }
    ]
  },
  'sales-automation-and-reporting': {
    slug: 'sales-automation-and-reporting',
    title: 'Sales Automation & Reporting',
    catalogImg: 'sales-automation.jpg',
    homeImg: 'service8.jpg',
    description: 'Automated sales reporting, market coverage tracking, team productivity monitoring, and execution dashboards.',
    fullDescription: 'We deploy sales automation and reporting systems that provide structured visibility into performance, growth, and field execution. Teams and clients receive actionable updates for faster decisions.',
    features: [
      {
        number: '01',
        title: 'Sales Tracking',
        description: 'Track regional sales performance and growth trends in structured formats.'
      },
      {
        number: '02',
        title: 'Coverage Reporting',
        description: 'Monitor market penetration, POS deployment, and customer acquisition progress.'
      },
      {
        number: '03',
        title: 'Execution Dashboards',
        description: 'Review team productivity, activation outcomes, and execution quality metrics.'
      }
    ]
  },
  'direct-execution': {
    slug: 'direct-execution',
    title: 'Direct Execution',
    catalogImg: 'direct-execution.png',
    homeImg: 'service8.jpg',
    description: 'Outsource your sales execution to JXC and activate expert teams that generate leads, engage customers, and close deals quickly.',
    fullDescription: 'Outsource your sales execution to JX Distribution Africa and deploy an expert team for lead generation, customer engagement, and deal closure.'
  }
};

/**
 * Helper to get service by slug
 */
export function getServiceBySlug(slug: string): ServiceMetadata | undefined {
  return servicesData[slug];
}

/**
 * Helper to get all services as an array (for listing pages)
 */
export function getServicesArray(): ServiceMetadata[] {
  return Object.values(servicesData);
}
