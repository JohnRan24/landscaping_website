import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml, Shovel } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Shovel,
                title: 'Landscape',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Hardscape',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Xeriscape',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Dryscape',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Concrete',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Excavate',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Sprinklers',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Fencing',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Pavers',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Concrete',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Rock walls',
                description: ''
            },
            {
                icon: Shovel,
                title: 'Trampolines',
                description: ''
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
