  
<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ColumnExtension } from "../../dist"

console.log(ColumnExtension)



const editor = useEditor({
  content: {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Hi there,' }],
    },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'This is a ' },
        { type: 'text', marks: [{ type: 'italic' }], text: 'basic' },
        { type: 'text', text: ' example of ' },
        { type: 'text', marks: [{ type: 'bold' }], text: 'tiptap' },
        {
          type: 'text',
          text: '. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:',
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'That’s a bullet list with one …' }],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '… or two list items.' }],
            },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [{ type: 'text', text: 'Sub-item 1' }],
                    },
                  ],
                },
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [{ type: 'text', text: 'Sub-item 2' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'blockquote',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Wow, that’s amazing. Good work, boy! ' },
            { type: 'hardBreak' },
            { type: 'text', text: '— Mom' },
          ],
        },
      ],
    },
    { type: 'paragraph' },
    {
      type: 'columnBlock',
      content: [
        {
          type: 'column',
          content: [
            { type: 'paragraph', content: [{ type: 'text', text: 'First column' }] },
            { type: 'paragraph', content: [{ type: 'text', text: 'with 2 paragraphs' }] },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [
                    {
                      type: 'paragraph',
                      content: [{ type: 'text', text: 'And even a list…' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'column',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Second column' }] }],
        },
        {
          type: 'column',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Third columns' }] }],
        },
      ],
    },
  ],
},
  extensions: [
    // override Document to allow columns
    StarterKit.configure(),
    ColumnExtension,
  ],
})
</script>
<template>
  <button
    type="button"
    @click="editor?.chain().focus().unsetColumns().run()">
    <span>unset columns</span>
  </button>
  <button
    type="button"
    @click="editor?.chain().focus().setColumns(3).run()">
    <span>add columns</span>
  </button>
  <editor-content :editor="editor" />
</template>
<style>
.ProseMirror .column-block {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 24px;
  padding: 8px 0;
}

.ProseMirror .column {
  overflow: auto;
  border: 1px gray dashed;
  border-radius: 8px;
  padding: 8px;
  margin: -8px;
}

</style>