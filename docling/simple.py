from docling.document_converter import DocumentConverter

# 创建转换器实例
converter = DocumentConverter()

# 转换文档 (可以是URL、本地文件路径等)
result = converter.convert(source="https://arxiv.org/pdf/2206.01062")

# 获取转换后的文档对象
doc = result.document

md_result = doc.export_to_markdown()

with open("output.md", "w", encoding="utf-8") as f:
    f.write(md_result)
