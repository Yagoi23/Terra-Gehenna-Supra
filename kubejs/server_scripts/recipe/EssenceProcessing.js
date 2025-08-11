const EssenceProcessing = (event) => {
  let Essence = ['fire', 'earth', 'air']
  Essence.forEach((essence) => {
    event.custom({
      type: "embers:mixing",
      inputs: [
        {
          amount: 10,
          fluid: "kubejs:alkaline_binder"
        },
        {
          amount: 5,
          fluid: "kubejs:spirit_water"
        },
        {
          amount: 5,
          fluid: `kubejs:raw_${essence}_essence`
        },
        {
          amount: 5,
          fluid: "kubejs:clarifying_oil"
        }
      ],
      output: {
        amount: 30,
        fluid: `kubejs:distilled_${essence}_essence`
      }
    })

    event.custom({
      type: "embers:boiling",
      input: {
        amount: 1,
        fluid: `kubejs:distilled_${essence}_essence`
      },
      output: {
        amount: 1,
        fluid: `kubejs:volatile_${essence}_essence`
      }
    })
  })
}