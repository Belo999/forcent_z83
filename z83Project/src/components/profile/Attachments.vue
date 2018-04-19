<template>
  <vue-clip :options="options">
    <template slot="clip-uploader-action">
      <div>
        <div class="dz-message"><h2> Click or Drag and Drop files here upload </h2></div>
      </div>
    </template>

    <template slot="clip-uploader-body" scope="props">
      <div v-for="file in props.files" :key="file">
        <img v-bind:src="file.dataUrl" />
        {{ file.name }} {{ file.status }}
      </div>
    </template>

  </vue-clip>
</template>

<script>
  export default {
      name: 'Attachments',
    data () {
      return {
        options: {
          url: '/upload',
          paramName: 'file'
        }
      }
    }

  }
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>