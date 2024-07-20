export interface Service {
    name: string;
    description: string;
    options: string[];
    image: string;
}

export interface ServicesData {
    services: {
        basic_services: Service[];
        advanced_services: Service[];
    };
}

export interface FeatureListItemProps {
    item: Service;
    features: Service;
    setFeatures: (item: Service) => void;
}

export interface IAnimation {
    children: any;
    index?: number
    className?: string;
}

export interface CarSizeProps {
    carType: string;
    title: string;
    image: string;
}

export interface IPricingData {
    plan: string;
    price: number;
    options: {
        name: string;
        status: boolean;
    }[];
}

export type IPricing = IPricingData[];
