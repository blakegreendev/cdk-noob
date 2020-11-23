# API Reference

**Classes**

Name|Description
----|-----------
[Noob](#cdk-noob-noob)|*No description*


**Structs**

Name|Description
----|-----------
[NoobProps](#cdk-noob-noobprops)|*No description*



## class Noob  <a id="cdk-noob-noob"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new Noob(scope: Construct, id: string, props?: NoobProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[NoobProps](#cdk-noob-noobprops)</code>)  *No description*
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**endpoint** | <code>string</code> | <span></span>



## struct NoobProps  <a id="cdk-noob-noobprops"></a>






Name | Type | Description 
-----|------|-------------
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | __*Optional*__



