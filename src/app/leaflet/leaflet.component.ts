import { Component } from '@angular/core';
import * as L from 'leaflet';
import { Layer, circle, tileLayer } from 'leaflet';
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent {
  circles = [{
		id: 'Badinh',
		name: 'Badinh',
		enabled: true,
		layer: circle([21.03475, 105.81415], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.6,
			color: 'transparent',
		}),
	},
	{
		id: 'Bactuliem',
		name: 'Bactuliem',
		enabled: true,
		layer: circle([21.06826, 105.7549], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.4,
			color: 'transparent',
		}),
	},
	{
		id: 'Caugiay',
		name: 'Caugiay',
		enabled: true,
		layer: circle([21.02805, 105.80218], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.4,
			color: 'transparent',
		}),
	},
	{
		id: 'dongda',
		name: 'dongda',
		enabled: true,
		layer: circle([21.01223, 105.82737], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.6,
			color: 'transparent',
		}),
	},
	{
		id: 'hadong',
		name: 'hadong',
		enabled: true,
		layer: circle([20.97154, 105.77716], {
			radius: 3000,
			fillColor: 'red',
			fillOpacity: 0.7,
			color: 'transparent',
		}),
	},
	{
		id: 'haibatrung',
		name: 'haibatrung',
		enabled: true,
		layer: circle([21.00597, 105.85748], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.2,
			color: 'transparent',
		}),
	},
	{
		id: 'hoankiem',
		name: 'hoankiem',
		enabled: true,
		layer: circle([21.02852, 105.85418], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.4,
			color: 'transparent',
		}),
	},
	{
		id: 'hoangmai',
		name: 'hoangmai',
		enabled: true,
		layer: circle([20.97422, 105.85588], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.5,
			color: 'transparent',
		}),
	},
	{
		id: 'longbien',
		name: 'longbien',
		enabled: true,
		layer: circle([21.04695, 105.88378], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.4,
			color: 'transparent',
		}),
	},
	{
		id: 'namtuliem',
		name: 'namtuliem',
		enabled: true,
		layer: circle([21.02844, 105.76959], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.4,
			color: 'transparent',
		}),
	},
	{
		id: 'tayho',
		name: 'tayho',
		enabled: true,
		layer: circle([21.07104, 105.82008], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.3,
			color: 'transparent',
		}),
	},
	{
		id: 'thanhtri',
		name: 'thanhtri',
		enabled: true,
		layer: circle([20.97414, 105.87354], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.3,
			color: 'transparent',
		}),
	},
	{
		id: 'thanhxuan',
		name: 'thanhxuan',
		enabled: true,
		layer: circle([20.99488, 105.81693], {
			radius: 2000,
			fillColor: 'red',
			fillOpacity: 0.7,
			color: 'transparent',
		}),
	},

	];
	LAYER_OCM = {
		id: 'opencyclemap',
		name: 'Open Cycle Map',
		enabled: true,
		layer: tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Cycle Map'
		})
	};
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Street Map'
		})
	};
	circleLayerGroup = L.layerGroup(
		this.circles.map((circle) => circle.layer)
	);
	// Values to bind to Leaflet Directive
	layersControlOptions: any = { position: 'bottomright' };
	layersControl = {
		baseLayers: {
			'Open Street Map': this.LAYER_OSM.layer,
			'Open Cycle Map': this.LAYER_OCM.layer
		},
		overlays: {
			'Covid': this.circleLayerGroup
		}

	}
	options: any = {
	
		zoom: 12,
		center: [21.00597, 105.85748],
		layers: [this.LAYER_OSM.layer]
		
	};
}
