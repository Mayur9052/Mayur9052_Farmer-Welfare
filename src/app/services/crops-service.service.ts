import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crops, Rabi, Kharif, Zaid } from '../Crop_details/Crops_interface';
import { details, Crop_Rabi , Crop_Kharif, Crop_Zaid} from '../Crop_details/Crops_details';

@Injectable({
  providedIn: 'root'
})
export class CropsService {
  constructor(private http: HttpClient) { }

  getAllCrops(): Crops[] {
    return details;
  }

  getCropsByName(name: string): Crops {
    return this.getAllCrops().find(crop => crop.name == name) ?? new Crops;
  }

  getCropsRabi(): Rabi[] {
    return Crop_Rabi;
  }

  getCropsKharif(): Kharif[] {
    return Crop_Kharif;
  }

  getCropsZaid() : Zaid[] {
    return Crop_Zaid;
  }

  Types() {
    const type1 = [{
      id: 1,
      name: "Rabi"
    },
    {
      id: 2,
      name: "Kharif"
    },
    {
      id: 3,
      name: "Zaid"
    }
    ];
    return type1;
  }

  Crops_matter() {
    const matter = [{
      id: 1,
      name: "Rabi",
      matter: "The rabi crops are sown around mid-November, preferably after the monsoon rains are over, and harvesting begins in April / May. The crops are grown either with rainwater that has percolated into the ground or using irrigation. Good rain in winter spoils the rabi crops but is good for kharif crops. The major rabi crop in India is wheat, followed by barley, mustard, sesame and peas.Peas are harvested early, as they are ready early: Indian markets are flooded with green peas from January to March, peaking in February."
    },
    {
      id: 2,
      name: "Kharif",
      matter: "The Kharif season varies by crop and region, starting at the earliest in May and ending at the latest in January. In India, the season is popularly considered to start in June and end in October.Kharif crops are usually sown at the beginning of the first rains during the advent of the south- west monsoon season, and they are harvested at the end of monsoon season(October - November).In other regions like Maharashtra, the west coast of India which receive rains in June, Kharif crops are sown in May, June and July."
    },
    {
      id: 3,
      name: "Zaid",
      matter: "Zaid crops are summer season crops. They grow for a short time period between kharif and rabi crops, mainly from March to June.These crops are mainly grown in the summer season during a period called the zaid crop season. Some summer months and rainy season is required.These crops also mature early.Some of the crops produced during zaid season are watermelon, muskmelon, cucumber, vegetables and fodder crops. Sugarcane takes almost a year to grow."
    }
    ];
    return matter;
  }

  Crops_index() {
    const Crops_index1 = [{
      id: 1,
      name: "Wheat"
    },
    {
      id: 1,
      name: "Barley"
    },
    {
      id: 1,
      name: "Peas"
    },
    {
      id: 1,
      name: "Gram"
    },
    {
      id: 1,
      name: "Mustard"
    },
    {
      id: 2,
      name: "Rice"
    },
    {
      id: 2,
      name: "Maize"
    },
    {
      id: 2,
      name: "Jowar"
    },
    {
      id: 2,
      name: "Bajra"
    },
    {
      id: 2,
      name: "Tur"
    },
    {
      id: 2,
      name: "Moong"
    },
    {
      id: 2,
      name: "Urad"
    },
    {
      id: 2,
      name: "Cotton"
    },
    {
      id: 2,
      name: "Jute"
    },
    {
      id: 2,
      name: "Groundnut"
    },
    {
      id: 2,
      name: "Soybean"
    },
    {
      id: 3,
      name: "Watermelon"
    },
    {
      id: 3,
      name: "Muskmelon"
    },
    {
      id: 3,
      name: "Cucumber"
    },
    {
      id: 3,
      name: "Bitter gourd"
    },
    {
      id: 3,
      name: "Fodder"
    },
    {
      id: 3,
      name: "Pumpkin"
    },
    {
      id: 3,
      name: "Guar(Cluster Beans)"
    },
    {
      id: 3,
      name: "Strawberry"
    },
    {
      id: 3,
      name: "Sugarcane"
    }

    ];

    return Crops_index1;
  }

}
