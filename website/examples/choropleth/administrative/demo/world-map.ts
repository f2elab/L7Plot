import { Choropleth } from '@antv/l7plot';

new Choropleth('container', {
  map: {
    type: 'mapbox',
    style: 'blank',
    center: [120.19382669582967, 30.258134],
    zoom: 3,
    pitch: 0,
  },
  source: {
    data: [],
    joinBy: {
      sourceField: 'code',
      geoField: 'adcode',
    },
  },
  viewLevel: {
    level: 'world',
    adcode: 'all',
  },
  autoFit: true,
  color: {
    field: 'name',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
  },
  style: {
    opacity: 1,
    stroke: '#ccc',
    lineWidth: 0.6,
    lineOpacity: 1,
  },
  label: {
    visible: true,
    field: 'name',
    style: {
      fill: '#000',
      opacity: 0.8,
      fontSize: 10,
      stroke: '#fff',
      strokeWidth: 2,
      textAllowOverlap: true,
      padding: [15, 15],
    },
  },
  state: {
    active: true,
    select: {
      stroke: 'red',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    },
  },
  tooltip: {
    items: ['name', 'adcode', 'value'],
  },
  zoom: {
    position: 'bottomright',
  },
  legend: {
    position: 'bottomleft',
  },
});
