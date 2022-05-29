export default {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        label: "hello first feature"
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-79.78271484375, 40.195659093364654],
            [-77.40966796875, 40.195659093364654],
            [-77.40966796875, 41.42625319507269],
            [-79.78271484375, 41.42625319507269],
            [-79.78271484375, 40.195659093364654]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        label: "hello second feature"
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-77.36572265625, 39.977120098439634],
            [-75.5419921875, 39.977120098439634],
            [-75.5419921875, 41.16211393939692],
            [-77.36572265625, 41.16211393939692],
            [-77.36572265625, 39.977120098439634]
          ]
        ]
      }
    }
  ]
};
