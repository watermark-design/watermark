---
layout: doc
---

<el-backtop></el-backtop>

# Watermark

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';

const app = getCurrentInstance();

onMounted(() => {
})
</script>

## Basic Usage

```vue
<Watermark
  content="hello watermark"
  :width="200"
  :height="200"
>
  <div style="height: 400px"></div>
</Watermark>
```

[//]: # ()
[//]: # (## API)

[//]: # ()
[//]: # (### Attributes)

[//]: # ()
[//]: # (| Name | Description | Type | Default |)

[//]: # (| --- | --- | --- | --- |)

[//]: # (| v-model | binding value | `string` | - |)

[//]: # (| api | query source | `string` | clearbit |)

[//]: # (| query-delay | query delay | `number` | 500 |)

[//]: # (| placeholder | input placeholder content | `string` | 请输入企业名称或统一社会信用代码 |)

[//]: # (| clearable | show clear button | `boolean` | true |)

[//]: # (| backFill | If backFill selected item the input when using keyboard | `boolean` | true |)

[//]: # (| popup-append-to-body | whether to append Dialog itself to body | `boolean` | true |)

[//]: # (| auto-focus | auto focus | `boolean` | true |)

[//]: # (| show-submit-button | show submit button | `boolean` | true |)

[//]: # (| submit-button-label | submit button label | `string` | Submit |)

[//]: # (| offset-top | pixels to offset from input bottom | `number` | 5 |)

[//]: # (| auto-flip | auto flip | `boolean` | false |)

[//]: # (| history-enabled | open save history record | `boolean` | true |)

[//]: # (| history-type | save history record mode | `string` | localStorage |)

[//]: # (| history-storage-key | save history record key | `string` | company-history |)

[//]: # (| history-clearable | show history clear button | `boolean` | true |)

[//]: # ()
[//]: # (### Events)

[//]: # ()
[//]: # (| Name | Description | Type |)

[//]: # (| --- | --- | --- |)

[//]: # (| input | triggers when the input value change | `Function` |)

[//]: # (| fetch | triggers when query data | `Function` |)

[//]: # (| abort-fetch | triggers when abort query data | `Function` |)

[//]: # (| select | triggers when a suggestion is clicked | `Function` |)

[//]: # (| clear | triggers when the input is cleared by clicking the clear button | `Function` |)

[//]: # (| focus | triggers when the input focuses | `Function` |)

[//]: # (| blur | triggers when the input blurs | `Function` |)

[//]: # (| submit | triggers when the button submit | `Function` |)

[//]: # (| dropdown-visible-change | triggers when the dropdown appears/disappears | `Function` |)
