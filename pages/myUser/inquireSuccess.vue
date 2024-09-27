<template>
  <div>
    <div class="step">
      <h4>藏品基本信息</h4>
      <ul>
        <li>藏品所有者：Admin</li>
        <li>藏品哈希值：CH38943JD0R7</li>
        <li>藏品名称：长城</li>
        <li>藏品类型：图文</li>
        <li>藏品载体：明信片</li>
        <li>发行时间：2024/03/05</li>
      </ul>
    </div>

    <div class="step">
      <u-steps current="4" direction="column">
        <h4>发行信息</h4>
        <u-steps-item title="已创作" desc="用户Admin完成藏品创作">
        </u-steps-item>
        <u-steps-item title="已审核" desc="后台管理员同意授权发行">
        </u-steps-item>
        <u-steps-item title="已上链" desc="创作藏品上链"></u-steps-item>
        <u-steps-item
          title="已发行"
          desc="可在“首页”—“发现”中搜索用户Admin创作的藏品"
        ></u-steps-item>
      </u-steps>
    </div>
    <div class="step">
      <!-- <u-steps current="4" direction="column" class="step">
        <h4>购买信息</h4>
        <u-steps-item title="已创作" desc="用户Admin完成藏品创作"> </u-steps-item>
        <u-steps-item title="已审核" desc="后台管理员同意授权发行"> </u-steps-item>
        <u-steps-item title="已上链" desc="创作藏品上链"></u-steps-item>
        <u-steps-item title="已发行" desc="可在“首页”—“发现”中搜索用户Admin创作的藏品"></u-steps-item>
      </u-steps> -->
      <h4>购买信息</h4>
      <div style="text-align: center">暂无</div>
    </div>
  </div>
</template>

<script></script>
<style scoped lang="scss">
.step {
  width: 85%;
  background-color: #f4f9ff;
  margin: 0 auto;
  margin-bottom: 20px;
  ul {
    padding: 0;
    li {
      font-size: 14px;
      color: #909193;
      margin: 10px 0 0 0;
    }
  }
}
</style>
